import { FC, useMemo } from 'react';

import { BreadcrumbItem, Breadcrumbs } from '@ozen-ui/kit/Breadcrumbs';
import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import clsx from 'clsx';
import { parse } from 'regexparam';
import { Link, useLocation, useParams } from 'wouter';

import { App, navigation } from '../../../../helpers';

import s from './Page.module.css';

export const Page: FC<App> = ({ component: Component, containerProps }) => {
  const params = useParams<{ id: string }>();
  const [location] = useLocation();

  const { m } = useBreakpoints();
  const isMobile = !m;

  const locations = useMemo(() => {
    return location
      .split('/')
      .filter((item) => item)
      .reduce((acc: string[], item, currentIndex) => {
        const res = acc[currentIndex - 1]
          ? `${acc[currentIndex - 1]}/${item}`
          : `/${item}`;

        return [...acc, res];
      }, []);
  }, [location]);

  const breadcrumbs = useMemo(() => {
    return locations.reduce((acc: App[] | [], location) => {
      const route = Object.values(navigation.routes).find(
        ({ link }) => link && parse(link).pattern.test(location)
      );

      return route ? [...acc, route] : acc;
    }, []);
  }, [locations]);

  console.log(locations, breadcrumbs);

  const root = breadcrumbs[0];
  const showBreadcrumbs = !isMobile && breadcrumbs.length > 1;
  const showHeader = !root?.disableHeader && root?.title;

  if (!Component) return null;

  return (
    <Container
      position="center"
      maxWidth="fullWidth"
      gutters={{ xs: 'm', m: '2xl' }}
      className={clsx(s.container, spacing({ py: isMobile ? 'm' : '2xl' }))}
      {...containerProps}
    >
      {showBreadcrumbs && (
        <Breadcrumbs>
          {breadcrumbs.map(({ title, link }, index) => (
            <Link to={link || ''} key={index} asChild>
              <BreadcrumbItem disabled={breadcrumbs.length - 1 === index}>
                {title}
              </BreadcrumbItem>
            </Link>
          ))}
        </Breadcrumbs>
      )}
      {showHeader && (
        <Typography variant={isMobile ? 'heading-l' : 'heading-xl'} as="h1">
          {root?.title}
        </Typography>
      )}
      <Component {...params} />
    </Container>
  );
};
