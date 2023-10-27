import type { FC } from 'react';

import { Badge } from '@ozen-ui/kit/Badge';
import { ListItemButton, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Link, useRoute } from 'wouter';

import { apps } from '../../apps.ts';
import { AccentList } from '../AccentList';
import { useAppBar } from '../AppBar';

const NavigationItem: FC<(typeof apps)[number]> = ({
  link,
  title,
  count,
  icon: Icon,
}) => {
  const [isActive] = useRoute(link);
  const [[, { off: close }], [expand]] = useAppBar();
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <Tooltip
      label={title}
      offset={[0, 20]}
      placement="right"
      disabled={expand || isMobile}
    >
      <ListItemButton as={Link} to={link} selected={isActive} onClick={close}>
        <ListItemIcon>
          {!expand && count && !isMobile ? (
            <Badge content={count} variant="dot" color="errorDark">
              <Icon size="m" />
            </Badge>
          ) : (
            <Icon size="m" />
          )}
        </ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{ noWrap: true, color: 'accentPrimary' }}
        />
        {count && (
          <ListItemIcon>
            <Badge content={count} color="errorDark" />
          </ListItemIcon>
        )}
      </ListItemButton>
    </Tooltip>
  );
};

export const Navigation = () => {
  return (
    <AccentList as="nav">
      {apps.map((app, index) => {
        return <NavigationItem {...app} key={index} />;
      })}
    </AccentList>
  );
};
