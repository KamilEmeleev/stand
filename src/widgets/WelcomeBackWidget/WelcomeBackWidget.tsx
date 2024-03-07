import { GiftIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import img from '../../assets/3d-casual-life-trophy-and-target.png';

import s from './WelcomeBackWidget.module.css';

export const WelcomeBackWidget = () => {
  return (
    <Stack gap="2xl" direction={{ xs: 'column', s: 'row' }}>
      <Stack direction="column" gap="l" align="start" fullWidth>
        <Typography variant="text-2xl_1" as="h4">
          Поздравляем, Айлин! 🥳
        </Typography>
        <Typography variant="text-m_1">
          Вы успешно завершили все свои задачи за прошедший спринт.
        </Typography>
        <Typography color="tertiary" variant="text-m">
          Когда мастер берется за дело и выполняет работу качественно и в срок,
          хочется в ответ ему выразить благодарность и восхищение! Спасибо за
          ваше усердие и за умение.
        </Typography>
        <Button iconLeft={GiftIcon}>Получить награду</Button>
      </Stack>
      <Stack align="center" justify="center" className={s.img}>
        <img src={img} width="240" alt="win" style={{ marginTop: '10%' }} />
      </Stack>
    </Stack>
  );
};
