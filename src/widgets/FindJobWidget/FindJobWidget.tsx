import { ArrowRightIcon, Suitcase2Icon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Divider } from '@ozen-ui/kit/Divider';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

export const FindJobWidget = () => {
  return (
    <Stack
      direction="column"
      align="start"
      divider={<Divider color="secondary" className={spacing({ my: 'l' })} />}
      fullWidth
    >
      <Stack gap="l">
        <Stack direction="column">
          <Typography
            color="info"
            as={Stack}
            gap="m"
            className={spacing({ mb: 'xl' })}
          >
            <Suitcase2Icon />
            <span>Работа</span>
          </Typography>
          <Typography variant="text-l_1" className={spacing({ mb: 'm' })}>
            Найти работу своей мечты
          </Typography>
          <Typography color="tertiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Stack>
      <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
        Искать работу
      </Button>
    </Stack>
  );
};
