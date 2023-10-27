import { useState, useCallback, CSSProperties, useRef, useEffect } from 'react';

import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useTimer } from '@ozen-ui/kit/useTimer';

import { chats } from '../../helpers';

import s from './ChatPage.module.css';
import { ChatList, Conversation } from './components';

type UseAnimationProps = {
  entered?: () => void;
  exited?: () => void;
  timeout?: number;
};

function useAnimation({ entered, exited, timeout }: UseAnimationProps) {
  const [state, setState] = useState<boolean>();
  const [animated, setAnimated] = useState<boolean>(false);

  const { startTimer } = useTimer({
    startTime: 0,
    interval: timeout,
    endTime: timeout,
    onTimerEnd: () => {
      setAnimated(false);
      const fn = state ? entered : exited;
      fn?.();
    },
  });

  const slide = useCallback(() => {
    setAnimated(true);
    setState((prevState) => !prevState);
    startTimer();
  }, [startTimer]);

  return { slide, state: state ? 'enter' : 'exit', animated };
}

const FOCUSABLE_SELECTOR = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
];

const getFocusableElements = (
  container: HTMLElement,
  selector = FOCUSABLE_SELECTOR
): HTMLElement[] =>
  Array.from(
    container.querySelectorAll<HTMLElement>(selector.join(','))
  ).filter((el) => !el.hasAttribute('disabled'));

const timeout = 300;

export const ChatPage = () => {
  const { m } = useBreakpoints();
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = !m;
  const [chatId, setChatId] = useState<string | number | null>(chats[0].id);

  const preventFocus = (active: boolean) => {
    const focusableElements = getFocusableElements(ref.current!);

    for (const item of focusableElements) {
      item.tabIndex = active ? -1 : 0;
    }
  };

  const close = () => {
    if (isMobile) slide();
  };

  const open = (id: string | number) => {
    setChatId(id);
    if (isMobile) slide();
  };

  const { slide, state, animated } = useAnimation({
    exited: () => setChatId(null),
    timeout,
  });

  useEffect(() => {
    preventFocus(animated);
  }, [animated]);

  return (
    <div className={s.chat}>
      <div
        ref={ref}
        className={s.chatContainer}
        style={
          {
            '--chat-translate-x': state === 'enter' ? '-100%' : '0%',
            '--chat-translate-timeout': `${timeout}ms`,
          } as CSSProperties
        }
      >
        <div
          className={s.chatListBlock}
          style={{
            visibility:
              isMobile && state === 'enter' && !animated ? 'hidden' : 'visible',
          }}
        >
          <ChatList id={chatId} onClickChatListItem={open} />
        </div>
        <div
          className={s.conversationBlock}
          style={{
            visibility:
              isMobile && state === 'exit' && !animated ? 'hidden' : 'visible',
          }}
        >
          <Conversation id={chatId} onClickBackButton={close} />
        </div>
      </div>
    </div>
  );
};
