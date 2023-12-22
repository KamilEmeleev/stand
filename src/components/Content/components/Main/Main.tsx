import { BreadcrumbItem, Breadcrumbs } from '@ozen-ui/kit/Breadcrumbs';
import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import clsx from 'clsx';
import { Route, useLocation } from 'wouter';

import { apps } from '../../../../helpers';

import s from './Main.module.css';

export const Main = () => {
  const [location] = useLocation();
  const { m } = useBreakpoints();
  const isMobile = !m;

  const currentApp = apps.find(({ link }) => link === location);

  return (
    <Container
      as="main"
      position="center"
      className={clsx(s.main, spacing({ pb: isMobile ? 'm' : 'xl' }))}
      gutters={{ xs: 'm', m: '2xl' }}
    >
      {!isMobile && currentApp?.link !== '/' && (
        <Breadcrumbs>
          <BreadcrumbItem>Страницы</BreadcrumbItem>
          <BreadcrumbItem aria-current="page">
            {currentApp?.title}
          </BreadcrumbItem>
        </Breadcrumbs>
      )}
      {!currentApp?.disableHeader && (
        <Typography variant={isMobile ? 'heading-xl' : 'heading-2xl'} as="h1">
          {currentApp?.title}
        </Typography>
      )}
      {apps.map(({ link, component: Page, title, list }) => (
        <>
          <Route path={link} key={title}>
            {Page ? <Page /> : null}
          </Route>
          {list?.map(({ link, title, component: Page }) => (
            <Route path={link} key={title}>
              {Page ? <Page /> : null}
            </Route>
          ))}
        </>
      ))}
    </Container>
  );
};
