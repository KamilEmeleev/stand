import { Fragment, useEffect, useState } from 'react';

import { ArrowRightIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Skeleton } from '@ozen-ui/kit/Skeleton';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import s from './CurrenciesWidget.module.css';
import { currencyDict } from './helper.ts';
import { currencyCodeType, ICurrency } from './types.ts';
import { getAmount } from './utils.ts';

export const CurrenciesWidget = () => {
  const [loading, setLoading] = useBoolean();
  const [currency, setCurrency] = useState<ICurrency>();

  const getCurrency = async () => {
    setLoading.on();
    const url = 'https://latest.currency-api.pages.dev/v1/currencies/kzt.json';

    try {
      const response = await fetch(url);
      const currency = await response.json();
      setCurrency(currency);
    } catch (error) {
      // console.log(error);
    }

    setLoading.off();
  };

  useEffect(() => {
    getCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack direction="column" align="start" fullWidth>
      <Typography variant="text-xl_1" className={spacing({ mb: 'l' })}>
        Курсы валют
      </Typography>
      <Grid gap="l" cols={4} align="center" className={s.grid}>
        <GridItem col={3}>
          <Typography color="tertiary">Валюта</Typography>
        </GridItem>
        <GridItem col={1}>
          <Typography color="tertiary" align="right">
            Стоимость
          </Typography>
        </GridItem>
        {currencyCodeType.map((code) => {
          const FlagIcon = currencyDict[code].icon;

          return (
            <Fragment key={code}>
              <GridItem col={3}>
                <Stack gap="m" align="center">
                  <FlagIcon className={s.icon} />
                  <Typography>{currencyDict[code].name}</Typography>
                </Stack>
              </GridItem>
              <GridItem col={1} as={Stack} fullWidth justify="end">
                <Typography>
                  {loading ? (
                    <Skeleton variant="typography" width={50} />
                  ) : (
                    getAmount(currency?.kzt[code])
                  )}
                </Typography>
              </GridItem>
            </Fragment>
          );
        })}
      </Grid>
      <Stack
        gap="xl"
        align="start"
        direction="column"
        className={spacing({ mt: 'auto' })}
        fullWidth
      >
        <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
          Больше валют
        </Button>
        <Typography variant="text-s" color="tertiary">
          Информация о курсах обмена иностранных валют является справочной и
          может меняться в течение дня. Точную информацию о курсах можно узнать
          в интернет-банке.
        </Typography>
      </Stack>
    </Stack>
  );
};
