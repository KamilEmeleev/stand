import { FC } from 'react';

import { ChatsIcon, LockIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Divider } from '@ozen-ui/kit/Divider';
import { Input } from '@ozen-ui/kit/Input';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { Chat, chats } from '../../../../helpers';
import { formatDate } from '../../utils';

import s from './ChatList.module.css';

type ChatListProps = {
  id?: Chat['id'] | null;
  onClickChatListItem?: (id: Chat['id']) => void;
};

export const ChatList: FC<ChatListProps> = ({
  onClickChatListItem,
  id: isProp,
}) => {
  return (
    <Card borderWidth="none" className={s.chatList}>
      <div className={s.chatListHeader}>
        <Input placeholder="Поиск чатов" renderLeft={ChatsIcon} fullWidth />
      </div>
      <Divider color="secondary" />
      <div className={s.chatListBody}>
        <List className={s.list}>
          {chats.map(({ id, user, messages }) => {
            const lastMessage = messages?.[messages.length - 1];

            return (
              <ListItemButton
                key={id}
                align="start"
                className={clsx([id === isProp && s.selected])}
                onClick={() => {
                  onClickChatListItem?.(id);
                }}
              >
                <ListItemIcon>
                  <Avatar name={user.name} src={user.avatar?.url}>
                    {user.avatar?.icon}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={user.name}
                  secondary={lastMessage?.text}
                  primaryTypographyProps={{
                    variant: 'text-m_1',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    variant: 'text-m',
                    color: 'secondary',
                    noWrap: true,
                  }}
                />
                <ListItemIcon>
                  <Typography variant="text-xs" color="secondary">
                    {formatDate(lastMessage?.date)}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </div>
      <Divider color="secondary" />
      <Stack align="start" className={s.chatListFooter}>
        <Stack justify="center" gap="m">
          <LockIcon size="s" />
          <Typography variant="text-s" color="tertiary" noWrap>
            Ваши личные сообщения защищены сквозным шифрованием
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
