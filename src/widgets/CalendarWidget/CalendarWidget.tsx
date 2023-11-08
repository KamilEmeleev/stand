import { Fragment } from 'react';

import { ArrowRightIcon, CalendarIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Divider } from '@ozen-ui/kit/Divider';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { List, ListItem, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import { calendar } from '../../helpers';

import s from './CalendarWidget.module.css';
import { formatDate, formatTime } from './utils';

export const CalendarWidget = () => {
  return (
    <Stack direction="column" gap="l" align="start" fullWidth>
      <Typography variant="text-xl_1">Календарь событий</Typography>
      <Typography color="tertiary">
        События получены на основе календаря банка
      </Typography>
      <List className={s.list}>
        {calendar.map(({ title, id, date }, index) => {
          const [day, month] = formatDate(date.from);

          return (
            <Fragment key={id}>
              {index > 0 && <Divider color="secondary" />}
              <ListItem>
                <ListItemIcon>
                  <div className={clsx(s.date, [index === 0 && s.dateActive])}>
                    <Typography align="center" variant="text-xl_1">
                      {day}
                    </Typography>
                    <Typography align="center" variant="text-s">
                      {month}
                    </Typography>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  secondary={formatTime(date.from, date.to)}
                />
                <ListItemIcon>
                  <IconButton icon={CalendarIcon} rounded compressed />
                </ListItemIcon>
              </ListItem>
            </Fragment>
          );
        })}
      </List>
      <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
        Все события календаря
      </Button>
    </Stack>
  );
};
