import { FC } from 'react';

import { Button } from '@ozen-ui/kit/ButtonNext';
import { Modal, type ModalProps } from '@ozen-ui/kit/Modal';
import { cnPaper } from '@ozen-ui/kit/Paper';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import clsx from 'clsx';

import s from './Cookies.module.css';

export const Cookies: FC<Partial<ModalProps & { disabled: boolean }>> = ({
  disabled,
  ...other
}) => {
  const [open, { off }] = useBoolean(true);

  if (disabled) {
    return null;
  }

  return (
    <Modal
      open={open}
      disableScrollLock
      disableClickOutside
      hideBackdrop
      className={s.zIndex1200}
      windowProps={{
        className: clsx(s.cookies, cnPaper({ background: 'accent' })),
      }}
      transitionProps={{
        timeout: 0,
        classNames: '1',
      }}
      {...other}
    >
      <Stack direction="column" gap="l" align="end">
        <Typography color="accentPrimary" align="left">
          Мы используем файлы cookie, чтобы улучшить работу наших сервисов.
          Подробнее об этом читайте в Политике конфиденциальности.
        </Typography>
        <Button color="secondary" size="s" onClick={off} className={s.button}>
          Принять
        </Button>
      </Stack>
    </Modal>
  );
};
