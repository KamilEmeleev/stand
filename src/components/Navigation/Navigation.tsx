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
import clsx from 'clsx';
import { Link, useRoute } from 'wouter';

import { navigation } from '../../helpers';
import { AccentList } from '../AccentList';
import s from '../AccentList/AccentList.module.css';
import { useAppBar } from '../AppBar';

const NavigationItem: FC<{ onClick?: () => void; name: string | string[] }> = ({
  name,
  onClick,
}) => {
  const [[, { off: close }], [expand]] = useAppBar();
  const [expandedList, { toggle }] = useBoolean(false);

  const item = navigation.routes[Array.isArray(name) ? name[0] : name];

  const Icon = item.icon;
  const subItems = Array.isArray(name) ? name.slice(1) : undefined;

  const hasSubItems = subItems?.length;

  const [isActive] = useRoute(item.link || '404');

  const { m } = useBreakpoints();
  const isMobile = !m;

  const handeClick = () => {
    if (hasSubItems) {
      toggle();
    } else {
      close?.();
    }
  };

  const selected = !!item.title && isActive;

  return (
    <>
      <Tooltip
        label={item.title}
        offset={[0, 20]}
        placement="right"
        disabled={expand || isMobile}
      >
        <ListItemButton
          {...(item.link && {
            as: Link,
            to: item.link || '/',
          })}
          className={clsx([selected && s.selectedItem])}
          selected={selected}
          onClick={onClick || handeClick}
        >
          {Icon && (
            <ListItemIcon>
              {!expand && item.count && !isMobile ? (
                <Badge content={item.count} variant="dot" color="errorDark">
                  <Icon />
                </Badge>
              ) : (
                <Icon />
              )}
            </ListItemIcon>
          )}
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{ noWrap: true, color: 'accentPrimary' }}
          />
          {item.count && (
            <ListItemIcon>
              <Badge content={item.count} color="errorDark" />
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
                  <ListItemButton as={Link} to={link || ''} onClick={close}>
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
