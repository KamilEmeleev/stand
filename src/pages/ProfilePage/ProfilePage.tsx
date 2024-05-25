import { FC } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import {
  Grid,
  GridItem as OzenGridItem,
  type GridItemProps,
} from '@ozen-ui/kit/Grid';

import {
  StorageWidget,
  NotificationControlsWidget,
  ProjectsWidget,
  GeneralInfoWidget,
  CalendarWidget,
  SocialActivityWidget,
} from '../../widgets';

import s from './ProfilePage.module.css';

const GridItem: FC<GridItemProps> = (props) => (
  <OzenGridItem as={Card} borderWidth="none" className={s.card} {...props} />
);

export const ProfilePage = () => {
  return (
    <Grid cols={{ xs: 1, m: 12 }} gap={{ xs: 'm', m: 'xl' }}>
      <GridItem col={{ xs: 1, m: 6, l: 4 }}>
        <SocialActivityWidget />
      </GridItem>
      <GridItem col={{ xs: 1, m: 6, l: 3 }}>
        <StorageWidget />
      </GridItem>
      <GridItem col={{ xs: 1, m: 12, l: 5 }}>
        <CalendarWidget />
      </GridItem>
      <GridItem col={{ xs: 1, m: 6, l: 4 }}>
        <ProjectsWidget />
      </GridItem>
      <GridItem col={{ xs: 1, m: 6, l: 5 }}>
        <GeneralInfoWidget />
      </GridItem>
      <GridItem col={{ xs: 1, m: 12, l: 3 }}>
        <NotificationControlsWidget />
      </GridItem>
    </Grid>
  );
};
