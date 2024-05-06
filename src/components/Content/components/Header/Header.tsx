import { useRef } from 'react';

import { AlertOnIcon, GroupUserIcon } from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import { Container } from '@ozen-ui/kit/Container';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { BurgerMenu } from '../../../BurgerMenu';
import Notifications from '../../../Notifications/Notifications.tsx';
import { Search } from '../../../Search';

import s from './Header.module.css';

export const Header = () => {
  const notificationRef = useRef<HTMLButtonElement | null>(null);
  const [open, { toggle, off }] = useBoolean(false);

  return (
    <Container
      as="header"
      maxWidth="fullWidth"
      gutters={{ xs: 'm', m: '2xl' }}
      className={s.header}
    >
      <Stack
        align="center"
        justify="spaceBetween"
        className={s.headerContent}
        fullWidth
      >
        <Stack gap="s">
          <BurgerMenu />
          <Search />
        </Stack>
        <Stack gap="s" align="center">
          <IconButton icon={GroupUserIcon} compressed aria-label="Контакты" />
          <IconButton
            variant="ghost"
            icon={
              <Badge content="3" variant="dot" color="errorDark" size="s">
                <AlertOnIcon />
              </Badge>
            }
            aria-label="Уведомления"
            ref={notificationRef}
            onClick={toggle}
            compressed
          />
        </Stack>
        <Notifications
          open={open}
          onClose={off}
          anchorRef={notificationRef}
          placement="bottom-end"
        />
      </Stack>
    </Container>
  );
};
