import type { FC, ReactElement, ReactNode } from 'react';

import { DeviceIcon, GlassesIcon, MonitorIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Divider } from '@ozen-ui/kit/Divider';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import clsx from 'clsx';
import { dedent } from 'ts-dedent';

import { Code } from '../Code';

import s from './Story.module.css';

export type StoryProps = {
  children?: ReactNode;
  code?: string;
  component?: () => ReactElement;
};

export const Story: FC<StoryProps> = ({ component, code = '' }) => {
  const [showCode, setShowCode] = useBoolean(false);
  const [showBg, setShowBg] = useBoolean(true);

  return (
    <>
      <Stack
        className={clsx(s.story, 'unstyled')}
        divider={<Divider color="secondary" />}
      >
        <div className={s.storyHeader}>
          <Stack gap="m">
            <IconButton
              icon={MonitorIcon}
              color="secondary"
              variant="function"
              compressed
            />
            <IconButton
              icon={DeviceIcon}
              color="secondary"
              variant="function"
              disabled
              compressed
            />
          </Stack>
          <Stack gap="m">
            <IconButton
              icon={<GlassesIcon />}
              color="secondary"
              variant="function"
              onClick={setShowBg.toggle}
              compressed
            />
          </Stack>
        </div>
        <div className={clsx(s.storyBody, showBg && s.hasBg)}>
          {component?.()}
        </div>
        <div className={s.storyFooter}>
          <Button
            color="tertiary"
            variant="function"
            onClick={setShowCode.toggle}
          >
            {showCode ? 'Скрыть пример кода' : 'Показать пример кода'}
          </Button>
        </div>
      </Stack>
      {showCode && <Code code={dedent(code)} />}
    </>
  );
};
