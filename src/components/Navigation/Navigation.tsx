import type { FC } from 'react';

import {
  ArrowDownFilledIcon,
  ArrowUpFilledIcon,
  DotIcon,
  PowerOutlineIcon,
} from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import { Collapse } from '@ozen-ui/kit/Collapse';
import { ListItemButton, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Link, useRoute } from 'wouter';

import { useApp } from '../../AppContext.tsx';
import { apps, App } from '../../helpers';
import { AccentList } from '../AccentList';
import { useAppBar } from '../AppBar';

const NavigationItem: FC<App & { onClick?: () => void }> = ({
  link = '',
  title,
  list,
  count,
  icon: Icon,
  onClick,
}) => {
  const [isActive] = useRoute(link);
  const hasList = !!list?.length;
  const [[, { off: close }], [expand]] = useAppBar();

  const [expandedList, { toggle }] = useBoolean(false);

  const { m } = useBreakpoints();
  const isMobile = !m;

  const handeClick = () => {
    if (hasList) {
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
          as={Link}
          to={link}
          selected={!!link && isActive}
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
          {hasList && (
            <ListItemIcon>
              {expandedList ? <ArrowUpFilledIcon /> : <ArrowDownFilledIcon />}
            </ListItemIcon>
          )}
        </ListItemButton>
      </Tooltip>
      {hasList && (
        <Collapse expanded={expandedList} unmountOnClosed>
          <AccentList>
            {list.map(({ title, link }, index) => (
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
            ))}
          </AccentList>
        </Collapse>
      )}
    </>
  );
};

export const Navigation = () => {
  const { logout } = useApp();

  return (
    <AccentList as="nav">
      {apps.map((app) => {
        return <NavigationItem {...app} key={app.title} />;
      })}
      <NavigationItem
        title="Завершить сеанс"
        icon={PowerOutlineIcon}
        onClick={logout}
      />
    </AccentList>
  );
};
