import { FC, useRef, useEffect } from 'react';

import {
  ArchiveIcon,
  AttachmentIcon,
  BanIcon,
  ChevronLeftIcon,
  DeleteIcon,
  MenuHorizontalIcon,
  SearchIcon,
  SendIcon,
  SoundOffIcon,
} from '@ozen-ui/icons';
import { scrollContainerToElement } from '@ozen-ui/kit/__inner__/cjs/utils/scrollContainerToElement';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Divider } from '@ozen-ui/kit/Divider';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { Input } from '@ozen-ui/kit/Input';
import { Menu, MenuItem, MenuItemIcon, MenuItemText } from '@ozen-ui/kit/Menu';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { user, type Chat, chats } from '../../../../helpers';
import { Message } from '../Message';

import s from './Conversation.module.css';

type ConversationProps = {
  id?: Chat['id'] | null;
  onClickBackButton?: () => void;
};

export const Conversation: FC<ConversationProps> = ({
  onClickBackButton,
  id: idProp,
}) => {
  const [open, { off, toggle }] = useBoolean();
  const menuAnchorRef = useRef<HTMLButtonElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const laseMessageRef = useRef<HTMLDivElement | null>(null);
  const { m } = useBreakpoints();
  const isMobile = !m;
  const chat = chats.find(({ id }) => id === idProp);

  useEffect(() => {
    scrollContainerToElement({
      container: bodyRef.current,
      element: laseMessageRef.current,
      behavior: 'auto',
    });
  }, [chat]);

  if (!idProp) {
    return (
      <Card
        borderWidth="none"
        className={s.conversation}
        as={Stack}
        align="center"
        justify="center"
        disabled
      >
        <Card>Здесь пусто – выросла капуста!</Card>
      </Card>
    );
  }

  return (
    <Card borderWidth="none" className={s.conversation}>
      <Stack gap="m" align="center" className={s.conversationHeader} fullWidth>
        {isMobile && (
          <IconButton
            variant="function"
            icon={ChevronLeftIcon}
            onClick={onClickBackButton}
          />
        )}
        <Stack align="center" gap="l" style={{ minWidth: 0 }}>
          <Avatar
            name={chat?.user.name}
            src={chat?.user.avatar?.url}
            online={chat?.user.online}
          >
            {chat?.user.avatar?.icon}
          </Avatar>
          <Stack direction="column" style={{ minWidth: 0 }}>
            <Typography variant="text-m_1" noWrap>
              {chat?.user.name}
            </Typography>
            <Typography variant="text-s" color="tertiary" noWrap>
              {chat?.user.online ? 'В сети' : 'Был(а) в сети 1 час назад'}
            </Typography>
          </Stack>
        </Stack>
        <Stack className={spacing({ ml: 'auto' })} gap="s">
          <IconButton size="s" icon={<SearchIcon size="m" />} />
          <IconButton
            ref={menuAnchorRef}
            size="s"
            icon={<MenuHorizontalIcon size="m" />}
            onClick={toggle}
          />
          <Menu
            open={open}
            onClose={off}
            anchorRef={menuAnchorRef}
            placement="bottom-end"
            style={{ minWidth: 200 }}
          >
            <MenuItem>
              <MenuItemIcon>
                <BanIcon />
              </MenuItemIcon>
              <MenuItemText primary="Блокировать" />
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <ArchiveIcon />
              </MenuItemIcon>
              <MenuItemText primary="Архив" />
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <SoundOffIcon />
              </MenuItemIcon>
              <MenuItemText primary="Беззвучный" />
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <DeleteIcon className={cnTypography({ color: 'error' })} />
              </MenuItemIcon>
              <MenuItemText
                primary="Удалить"
                primaryTypographyProps={{ color: 'error' }}
              />
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <Divider color="secondary" />
      <Stack
        direction="column"
        className={s.conversationBody}
        ref={bodyRef}
        fullWidth
      >
        {chat?.messages?.map((message) => {
          return (
            <Message
              {...message}
              ref={laseMessageRef}
              user={message.type === 'incoming' ? chat.user : user}
              key={message.id}
            />
          );
        })}
      </Stack>
      <Divider color="secondary" />
      <Stack align="center" gap="s" className={s.conversationFooter} fullWidth>
        <IconButton icon={AttachmentIcon} />
        <Input placeholder="Ваше сообщение…" fullWidth />
        <IconButton icon={SendIcon} />
      </Stack>
    </Card>
  );
};
