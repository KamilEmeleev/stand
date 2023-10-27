import { Avatar } from '@ozen-ui/kit/Avatar';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { user } from '../../helpers';

import s from './SocialActivityWidget.module.css';

export const SocialActivityWidget = () => {
  return (
    <Stack direction="column" fullWidth>
      <div className={s.avatarBackground} />
      <Stack
        align="center"
        justify="center"
        direction="column"
        gap="xl"
        className={s.avatarContainer}
        fullWidth
      >
        <Avatar
          size="xl"
          name={user.name}
          src={user.avatar.url}
          className={s.avatar}
        />
        <Stack direction="column" gap="xs">
          <Typography variant="text-xl_1" align="center">
            {user.name}
          </Typography>
          <Typography color="tertiary" align="center">
            {user.role}
          </Typography>
        </Stack>
        <Stack gap="xs" justify="spaceAround" fullWidth>
          <Stack direction="column" align="center">
            <Typography variant="text-2xl_1">17</Typography>
            <Typography variant="text-s" color="tertiary">
              Посты
            </Typography>
          </Stack>
          <Stack direction="column" align="center">
            <Typography variant="text-2xl_1">5.7k</Typography>
            <Typography variant="text-s" color="tertiary">
              Подписчиков
            </Typography>
          </Stack>
          <Stack direction="column" align="center">
            <Typography variant="text-2xl_1">345</Typography>
            <Typography variant="text-s" color="tertiary">
              Подписки
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
