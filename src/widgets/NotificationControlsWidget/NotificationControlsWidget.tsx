import { Stack } from '@ozen-ui/kit/Stack';
import { Toggle } from '@ozen-ui/kit/Toggle';
import { Typography } from '@ozen-ui/kit/Typography';

export const NotificationControlsWidget = () => {
  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Typography variant="text-xl_1">Уведомления</Typography>
      <Stack direction="column" gap="l">
        <Toggle
          label="Уведомления о последних действиях на платформе"
          defaultChecked
        />
        <Toggle label="Ответы на комментарии" />
        <Toggle label="Новости платформы" />
        <Toggle label="Уведомления о ваших ближайших встречах" />
        <Toggle label="Рекомендованный контент" />
        <Toggle label="Вход по пин-коду" />
        <Toggle label="Синхронизация данных" />
      </Stack>
    </Stack>
  );
};
