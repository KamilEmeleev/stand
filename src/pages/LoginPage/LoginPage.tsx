import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';

import { BerekeID } from '../../components';

import { LoginPageFooter, LoginPageHeader, LoginPageBody } from './components';
import s from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={s.login}>
      <div className={s.container}>
        <Card borderWidth="none" size="l" className={s.form}>
          <Stack direction="column" gap="xl" style={{ maxWidth: 420 }}>
            <BerekeID />
            <LoginPageHeader />
            <LoginPageBody />
            <LoginPageFooter />
          </Stack>
        </Card>
      </div>
    </div>
  );
};
