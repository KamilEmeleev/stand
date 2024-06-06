import { Fragment, type MouseEvent, useState } from 'react';

import { ArrowRightIcon, CalendarIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Calendar } from '@ozen-ui/kit/Calendar';
import { Divider } from '@ozen-ui/kit/Divider';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { List, ListItem, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Popover } from '@ozen-ui/kit/Popover';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Link } from 'wouter';

import { DateIcon } from '../../components';
import { calendarEvents } from '../../helpers';

import s from './CalendarWidget.module.css';
import { formatTime } from './utils';

export const CalendarWidget = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="column" gap="l" align="start" fullWidth>
      <Typography variant="text-xl_1">Календарь событий</Typography>
      <Typography color="tertiary">
        События получены на основе календаря банка
      </Typography>
      <List className={s.list} disablePadding>
        {calendarEvents.slice(0, 4).map(({ title, id, date }, index) => {
          return (
            <Fragment key={`${title}-${id}`}>
              {index > 0 && <Divider color="secondary" />}
              <ListItem>
                <ListItemIcon>
                  <DateIcon
                    date={date.from.toISOString()}
                    active={index === 0}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  secondary={formatTime(
                    date.from.toISOString(),
                    date.to.toISOString()
                  )}
                />
                <ListItemIcon>
                  <IconButton
                    icon={CalendarIcon}
                    onClick={handleClick}
                    rounded
                    compressed
                  />
                </ListItemIcon>
              </ListItem>
            </Fragment>
          );
        })}
      </List>
      <Popover
        open={open}
        anchorRef={{ current: anchorEl }}
        onClose={handleClose}
        placement="bottom-start"
        offset={[0, 8]}
      >
        <Calendar />
      </Popover>
      <Link to="/calendar">
        <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
          Все события календаря
        </Button>
      </Link>
    </Stack>
  );
};
