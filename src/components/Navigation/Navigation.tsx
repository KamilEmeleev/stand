import type { FC } from 'react';

import {
  ArrowDownFilledIcon,
  ArrowUpFilledIcon,
  DotIcon,
} from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import { Collapse } from '@ozen-ui/kit/Collapse';
import { ListItemButton, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Link, useLocation } from 'wouter';

import { navigation } from '../../helpers';
import { AccentList } from '../AccentList';
import { useAppBar } from '../AppBar';

import { isSelectedItem } from './utils.ts';

const NavigationItem: FC<{ onClick?: () => void; name: string | string[] }> = ({
  name,
  onClick,
}) => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  const [[, { off: close }], [expand]] = useAppBar();
  const [expandedList, { toggle }] = useBoolean(false);

  const [location] = useLocation();

  const root = navigation.routes[Array.isArray(name) ? name[0] : name];

  const { icon: Icon, link, title, count } = root;

  const subItems = Array.isArray(name) ? name.slice(1) : undefined;

  const hasSubItems = subItems?.length;

  const handeClick = () => {
    if (hasSubItems) {
      toggle();
    } else {
      close?.();
    }
  };

  return (
    <>
      <Tooltip
        label={title}
        offset={[0, 20]}
        placement="right"
        disabled={expand || isMobile}
      >
        <ListItemButton
          {...(link && {
            as: Link,
            to: link || '/',
          })}
          selected={isSelectedItem(link, location)}
          onClick={onClick || handeClick}
        >
          {Icon && (
            <ListItemIcon>
              {!expand && count && !isMobile ? (
                <Badge content={count} variant="dot" color="errorDark">
                  <Icon />
                </Badge>
              ) : (
                <Icon />
              )}
            </ListItemIcon>
          )}
          <ListItemText
            primary={title}
            primaryTypographyProps={{ noWrap: true, color: 'accentPrimary' }}
          />
          {count && (
            <ListItemIcon>
              <Badge content={count} color="errorDark" />
            </ListItemIcon>
          )}
          {hasSubItems && (
            <ListItemIcon>
              {expandedList ? <ArrowUpFilledIcon /> : <ArrowDownFilledIcon />}
            </ListItemIcon>
          )}
        </ListItemButton>
      </Tooltip>
      {hasSubItems && (
        <Collapse expanded={expandedList} unmountOnClosed>
          <AccentList>
            {subItems.map((name, index) => {
              const { title, link } = navigation.routes[name];

              return (
                <Tooltip
                  label={title}
                  offset={[0, 20]}
                  placement="right"
                  key={index}
                  disabled={expand || isMobile}
                >
                  <ListItemButton
                    as={Link}
                    to={link || ''}
                    onClick={close}
                    selected={isSelectedItem(link, location)}
                  >
                    <ListItemIcon>
                      {expand || isMobile ? null : <DotIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={title}
                      primaryTypographyProps={{
                        noWrap: true,
                        color: 'accentPrimary',
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              );
            })}
          </AccentList>
        </Collapse>
      )}
    </>
  );
};

export const Navigation = () => {
  return (
    <AccentList as="nav">
      {navigation.apps.map((app, index) => {
        return <NavigationItem name={app} key={index} />;
      })}
    </AccentList>
  );
};
