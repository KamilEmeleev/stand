import { FC, ReactNode, useEffect, useState } from 'react';

import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useEventListener } from '@ozen-ui/kit/useEventListener';
import clsx from 'clsx';

import { useApp } from '../../AppContext';
import { MDX } from '../MDX';

import { DocResources, DocResourcesProps } from './components';
import s from './Doc.module.css';

export type DocProps = {
  children?: ReactNode;
} & Pick<DocResourcesProps, 'resources'>;

export const Doc: FC<DocProps> = ({ children, resources }) => {
  const { scrollContainerEl } = useApp();
  const [links, setLinks] = useState<HTMLElement[]>();
  const [activeId, setActiveId] = useState<string>();
  const { m, l } = useBreakpoints();
  const isMobile = !m;
  const isDesktop = l;

  useEffect(() => {
    const links = document.querySelectorAll('h2');
    if (links) setLinks([...links]);
  }, []);

  useEventListener({
    active: !!scrollContainerEl,
    eventName: 'scroll',
    element: { current: scrollContainerEl || null },
    handler: () => {
      if (!links) return;

      for (const item of links) {
        if (item.offsetTop < (scrollContainerEl?.scrollTop || 0)) {
          setActiveId(item.id);
        }
      }
    },
  });

  return (
    <Grid cols={8}>
      <GridItem col={{ xs: 8, l: 6 }}>
        <Card
          as={Stack}
          borderWidth="none"
          direction="column"
          gap="2xl"
          className={spacing({ p: isMobile ? 'xl' : '3xl' })}
          fullWidth
        >
          <MDX>{children}</MDX>
          <DocResources resources={resources} />
        </Card>
      </GridItem>
      {isDesktop && (
        <GridItem col={{ xs: 8, l: 2 }}>
          <Card
            as={Stack}
            borderWidth="none"
            direction="column"
            gap="l"
            className={clsx(spacing({ p: isMobile ? 'xl' : '3xl' }), s.docNav)}
            fullWidth
          >
            <Typography variant="text-m_1">Содержание:</Typography>
            <Stack direction="column" gap="s">
              {links?.map((link) => {
                return (
                  <Typography
                    as="a"
                    key={link.id}
                    href={`#${link.id}`}
                    variant={link.id === activeId ? 'text-m_1' : 'text-m'}
                    style={{ textDecoration: 'none' }}
                  >
                    {link.innerText}
                  </Typography>
                );
              })}
            </Stack>
          </Card>
        </GridItem>
      )}
    </Grid>
  );
};
