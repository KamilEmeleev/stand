import { FormEvent, useState } from 'react';

import { CloseEyesIcon, OpenEyesIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Card } from '@ozen-ui/kit/Card';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { Input } from '@ozen-ui/kit/Input';
import { Link } from '@ozen-ui/kit/Link';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { SectionMessage } from '@ozen-ui/kit/SectionMessage';
import { useSnackbar } from '@ozen-ui/kit/Snackbar';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import clsx from 'clsx';

import { useApp } from '../../AppContext.tsx';
import { BerekeLogo } from '../../icons';

import s from './LoginPage.module.css';

export const LoginPage = () => {
  const [loading, { on, off }] = useBoolean(false);
  const { login, theme } = useApp();
  const { s: small } = useBreakpoints();
  const isMobile = !small;
  const [type, setType] = useState<'password' | 'text'>('password');

  const { pushMessage } = useSnackbar();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = event.currentTarget.login.value;
    const password = event.currentTarget.password.value;

    on();

    setTimeout(() => {
      if (user === 'guest' && password === 'guest') {
        login?.();
      } else {
        pushMessage({
          title: 'Некорректные данные.',
          description: 'Пожалуйста, попробуйте еще раз.',
          status: 'error',
        });
      }

      off();
    }, 2000);
  };

  return (
    <div className={clsx(s.login, theme === 'dark' && s.dark)}>
      <Card borderWidth="none" size="l">
        <Stack direction="column" gap="xl" style={{ maxWidth: 420 }}>
          <Stack align="center" gap="l" justify="spaceBetween" fullWidth>
            <Stack align="center" gap="s" className={s.id}>
              <BerekeLogo />
              <Typography variant="text-l_1" color="actionOn">
                ID
              </Typography>
            </Stack>
          </Stack>
          <div>
            <Typography
              variant={isMobile ? 'text-2xl_1' : 'text-3xl_1'}
              align="left"
              className={spacing({ mb: 's' })}
            >
              Привет! 👋
            </Typography>
            <Typography
              variant={isMobile ? 'text-2xl_1' : 'text-3xl_1'}
              align="left"
            >
              Войдите в приложение
            </Typography>
          </div>
          <Stack
            gap="xl"
            as="form"
            direction="column"
            onSubmit={onSubmit}
            fullWidth
          >
            <Input
              label="Логин"
              id="login"
              name="login"
              defaultValue="guest"
              fullWidth
              autoFocus
            />
            <Input
              defaultValue="guest"
              label="Пароль"
              id="password"
              name="password"
              type={type}
              renderRight={({ size }) => (
                <IconButton
                  size={size}
                  type="button"
                  variant="function"
                  icon={type === 'password' ? OpenEyesIcon : CloseEyesIcon}
                  onClick={() =>
                    setType(type === 'password' ? 'text' : 'password')
                  }
                />
              )}
              fullWidth
            />
            <Button loading={loading} fullWidth type="submit">
              Вперёд
            </Button>
            <Link align="center">У меня нет логина и пароля</Link>
          </Stack>

          <SectionMessage>
            Для входа в приложение воспользуйтесь гостевым логином и паролем:{' '}
            <Typography variant="text-m_1" as="span">
              guest
            </Typography>{' '}
            и{' '}
            <Typography variant="text-m_1" as="span">
              guest
            </Typography>
          </SectionMessage>
        </Stack>
      </Card>
    </div>
  );
};
