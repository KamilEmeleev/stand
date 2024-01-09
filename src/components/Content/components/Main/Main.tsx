import { BreadcrumbItem, Breadcrumbs } from '@ozen-ui/kit/Breadcrumbs';
import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import clsx from 'clsx';
import { parse } from 'regexparam';
import { Link, Route, useLocation } from 'wouter';

import { App, navigation } from '../../../../helpers';

import s from './Main.module.css';

export const Main = () => {
  const [location] = useLocation();
  const { m } = useBreakpoints();
  const isMobile = !m;

  const locations = location
    .split('/')
    .filter((item) => item)
    .reduce((acc: string[], item) => {
      return [...acc, `${acc.join('')}/${item}`];
    }, []);

  const breadcrumbs = locations.reduce((acc: App[] | [], location) => {
    const route = Object.values(navigation.routes).find(
      ({ link }) => link && parse(link).pattern.test(location)
    );

    return route ? [...acc, route] : acc;
  }, []);

  return (
    <Container
      as="main"
      position="center"
      className={clsx(s.main, spacing({ pb: isMobile ? 'm' : 'xl' }))}
      gutters={{ xs: 'm', m: '2xl' }}
    >
      {!isMobile && breadcrumbs.length > 1 && (
        <Breadcrumbs>
          {breadcrumbs.map(({ title, link }, index) => (
            <Link to={link || ''} key={link}>
              <BreadcrumbItem
                key={link}
                disabled={breadcrumbs.length - 1 === index}
              >
                {title}
              </BreadcrumbItem>
            </Link>
          ))}
        </Breadcrumbs>
      )}
      {!breadcrumbs[0]?.disableHeader && (
        <Typography variant={isMobile ? 'heading-xl' : 'heading-2xl'} as="h1">
          {breadcrumbs[0]?.title}
        </Typography>
      )}
      {Object.values(navigation.routes).map(
        ({ link, component: Page, title }) => (
          <Route path={link} key={title}>
            {Page ? <Page /> : null}
          </Route>
        )
      )}
    </Container>
  );
};
