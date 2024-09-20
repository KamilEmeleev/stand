import { forwardRef } from 'react';

import { Avatar } from '@ozen-ui/kit/Avatar';
import { File } from '@ozen-ui/kit/File';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Paper } from '@ozen-ui/kit/Paper';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { Image } from '../../../../components';
import { ChatMessage, User } from '../../../../helpers';
import { formatDate } from '../../utils';

import s from './Message.module.css';

export const Message = forwardRef<HTMLDivElement, ChatMessage & { user: User }>(
  ({ user, text, type, assets, date, emoji }, ref) => {
    const AvatarIcon = user?.avatar?.icon;

    return (
      <Stack
        className={clsx(s.messageContainer, s[type], spacing({ mb: 'xl' }))}
        gap="m"
        ref={ref}
        align="center"
        fullWidth
      >
        <Avatar name={user?.fullName} size="s" src={user?.avatar?.url}>
          {AvatarIcon && <AvatarIcon />}
        </Avatar>
        <Stack
          gap="xs"
          direction="column"
          align={type === 'incoming' ? 'start' : 'end'}
        >
          <Stack
            className={clsx(s.message, spacing({ p: 'm' }))}
            as={Paper}
            direction="column"
            gap="xs"
            radius="l"
          >
            <Typography variant="text-m_1">{user?.fullName}</Typography>
            <Typography as="span" className={s.text}>
              {!emoji && text}
              {emoji && <img src={emoji} alt="emoji" width={100} />}
            </Typography>
            {!!assets?.length &&
              assets.map(({ format, name, size, url }) => {
                if (format === 'jpg' || format === 'png')
                  return (
                    <Image
                      className={s.img}
                      key={name}
                      alt={name}
                      width="100%"
                      src={url}
                    />
                  );

                return (
                  <Stack gap="m" align="start" key={name}>
                    <File color="primary">{format?.toUpperCase()}</File>
                    <Stack direction="column">
                      <Typography variant="text-s" noWrap>
                        {name}
                      </Typography>
                      <Typography variant="text-s" color="tertiary">
                        {size}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              })}
          </Stack>
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ px: 'm' })}
          >
            {formatDate(date)}
          </Typography>
        </Stack>
      </Stack>
    );
  }
);
