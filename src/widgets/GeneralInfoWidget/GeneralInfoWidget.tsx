import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

export const GeneralInfoWidget = () => {
  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Typography variant="text-xl_1">Основная информация</Typography>
      <Grid cols={{ xs: 1, m: 2 }} gap="l">
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            Компания
          </Typography>
          <Typography variant="text-m_1">Bereke Bank</Typography>
        </GridItem>
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            Департамент
          </Typography>
          <Typography variant="text-m_1">Продуктовый дизайн</Typography>
        </GridItem>
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            Языки
          </Typography>
          <Typography variant="text-m_1">Казахский, Русский</Typography>
        </GridItem>
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            Образование
          </Typography>
          <Typography variant="text-m_1">Ualikhanov University</Typography>
        </GridItem>
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            Город
          </Typography>
          <Typography variant="text-m_1">Алматы</Typography>
        </GridItem>
        <GridItem as={Card} borderWidth="s">
          <Typography
            variant="text-s"
            color="tertiary"
            className={spacing({ mb: 'xs' })}
          >
            День рождения
          </Typography>
          <Typography variant="text-m_1">10 июня 1991</Typography>
        </GridItem>
      </Grid>
    </Stack>
  );
};
