import { FormEvent, useState } from 'react';

import { EyeCrossIcon, EyeIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Link } from '@ozen-ui/kit/Link';
import { useSnackbar } from '@ozen-ui/kit/Snackbar';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { useApp } from '../../../../AppContext.tsx';
import { InputAutofill } from '../InputAutofill/InputAutofill.tsx';

export const LoginPageBody = () => {
  const { login } = useApp();
  const { pushMessage } = useSnackbar();
  const [loading, { on, off }] = useBoolean(false);

  const [type, setType] = useState<'password' | 'text'>('password');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = event.currentTarget.login.value;
    const password = event.currentTarget.password.value;

    on();

    setTimeout(() => {
      if (user === 'guest' && password === 'guest') login?.();
      else
        pushMessage({
          title: 'Некорректные данные.',
          description: 'Пожалуйста, попробуйте еще раз.',
          status: 'error',
        });

      off();
    }, 2000);
  };

  const handleShowPassword = () =>
    setType(type === 'password' ? 'text' : 'password');

  return (
    <Stack gap="xl" as="form" direction="column" onSubmit={onSubmit} fullWidth>
      <InputAutofill id="login" name="login" label="Логин" fullWidth />
      <InputAutofill
        type={type}
        id="password"
        label="Пароль"
        name="password"
        renderRight={({ size }) => (
          <IconButton
            size={size}
            type="button"
            variant="function"
            onClick={handleShowPassword}
            icon={type === 'password' ? EyeIcon : EyeCrossIcon}
          />
        )}
        fullWidth
      />
      <Button loading={loading} type="submit" fullWidth>
        Вперёд
      </Button>
      <Link align="center">У меня нет логина и пароля</Link>
    </Stack>
  );
};

export default LoginPageBody;
