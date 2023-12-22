import {
  BankIcon,
  GiftIcon,
  RobotIcon,
  ShopIcon,
  UploadCloudIcon,
  WidgetIcon,
} from '@ozen-ui/icons';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';

export const HelpCenterFAQ = () => {
  return (
    <Stack direction="column" gap="3xl" className={spacing({ p: '2xl' })}>
      <Typography variant="text-xl_1" as="h2" align="center">
        Популярные разделы
      </Typography>
      <Grid cols={{ xs: 1, s: 3 }} gap="xl">
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">Платформа</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">Банк</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">Маркет</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">B-Cloud</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">Искусственный интеллект</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
        <GridItem as={Card}>
          <Stack direction="column" gap="l" fullWidth>
            <Typography color="tertiary">Награды</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};
