import { FC } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import {
  Grid,
  GridItem as OzenGridItem,
  type GridItemBaseProps,
} from '@ozen-ui/kit/Grid';

import {
  WelcomeBackWidget,
  CompletedTasksWidget,
  HelpCenterWidget,
  CreatedIssuesWidget,
  FinancialTransactionsWidget,
  ResolvedIncidentsWidget,
  TipsWidget,
  FindJobWidget,
  CurrenciesWidget,
} from '../../widgets';

import s from './MainPage.module.css';

const GridItem: FC<GridItemBaseProps> = (props) => (
  <OzenGridItem as={Card} borderWidth="none" className={s.card} {...props} />
);

export const MainPage = () => {
  return (
    <Grid cols={12} gap={{ xs: 'm', m: 'xl' }}>
      <GridItem col={{ xs: 12, s: 12, m: 12, l: 7 }}>
        <WelcomeBackWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 12, m: 12, l: 5 }}>
        <TipsWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 12, m: 4 }}>
        <CompletedTasksWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 6, m: 4 }}>
        <ResolvedIncidentsWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 6, m: 4 }}>
        <CreatedIssuesWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 12, m: 6, l: 7 }}>
        <FinancialTransactionsWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 12, m: 6, l: 5 }}>
        <CurrenciesWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 6, m: 6 }}>
        <FindJobWidget />
      </GridItem>
      <GridItem col={{ xs: 12, s: 6, m: 6 }}>
        <HelpCenterWidget />
      </GridItem>
    </Grid>
  );
};
