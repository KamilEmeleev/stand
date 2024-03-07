import { Avatar } from '@ozen-ui/kit/Avatar';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { Container } from '@ozen-ui/kit/Container';
import { Link } from '@ozen-ui/kit/Link';
import { List, ListItem, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Link as LinkWouter, useLocation } from 'wouter';

import { useApp } from '../../AppContext.tsx';
import { user } from '../../helpers';

import s from './LogoutPage.module.css';

export const LogoutPage = () => {
  const { logout } = useApp();
  const [, setLocation] = useLocation();

  const exit = () => {
    logout?.();
    setLocation('/');
  };

  // TODO: disableGutters for List component
  return (
    <div className={s.logout}>
      <Container maxWidth="fullWidth" gutters={{ xs: 'm', m: '2xl' }}>
        <Card className={s.logoutForm} borderWidth="none" size="l">
          <Stack gap="2xl" direction="column" fullWidth>
            <Typography variant="heading-2xl">
              Хотите покинуть платформу?
            </Typography>
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemIcon>
                  <Avatar name={user.name} src={user.avatar.url} />
                </ListItemIcon>
                <ListItemText
                  primary={user.name}
                  secondary="Текущая сессия"
                  primaryTypographyProps={{ variant: 'text-l' }}
                  secondaryTypographyProps={{ variant: 'text-s' }}
                />
              </ListItem>
            </List>
            <Button onClick={exit}>Выйти</Button>
            <Link as={LinkWouter} align="center" to="/">
              Нет, я пока остаюсь на платформе
            </Link>
          </Stack>
        </Card>
      </Container>
    </div>
  );
};
