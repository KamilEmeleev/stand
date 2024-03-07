import { ArrowRightIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

export const TipsWidget = () => {
  return (
    <Stack direction="column" gap="l" align="start">
      <Typography variant="text-xs" color="tertiary">
        Совет от эксперта
      </Typography>
      <Typography variant="text-xl_1">
        7 шагов для начала работы
        <br /> с платформой
      </Typography>
      <Typography color="tertiary">
        Невероятная гибкость позволяет настроить платформу в соответствии с
        уникальным рабочим процессом команды.
      </Typography>
      <Button
        variant="function"
        iconRight={<ArrowRightIcon size="s" />}
        className={spacing({ mt: 'auto' })}
      >
        Приступить
      </Button>
    </Stack>
  );
};
