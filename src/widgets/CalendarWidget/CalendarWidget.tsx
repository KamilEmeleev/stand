import { ArrowRightIcon, CalendarIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Divider } from '@ozen-ui/kit/Divider';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { List, ListItem, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import clsx from 'clsx';

import s from './CalendarWidget.module.css';

export const CalendarWidget = () => {
  return (
    <Stack direction="column" gap="l" align="start" fullWidth>
      <Typography variant="text-xl_1">Календарь событий</Typography>
      <Typography color="tertiary">
        События получены на основе календаря банка
      </Typography>
      <List className={s.list}>
        <ListItem>
          <ListItemIcon>
            <div className={clsx(s.date, s.dateActive)}>
              <Typography align="center" variant="text-xl_1">
                6
              </Typography>
              <Typography align="center" variant="text-s">
                окт
              </Typography>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Встреча с заказчиком"
            secondary="c 17:00 до 18:00"
          />
          <ListItemIcon>
            <IconButton icon={CalendarIcon} rounded compressed />
          </ListItemIcon>
        </ListItem>
        <Divider color="secondary" />
        <ListItem>
          <ListItemIcon>
            <div className={s.date}>
              <Typography align="center" variant="text-xl_1">
                7
              </Typography>
              <Typography align="center" variant="text-s">
                окт
              </Typography>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Ежедневный митинг"
            secondary="c 10:00 до 10:30"
          />
          <ListItemIcon>
            <IconButton icon={CalendarIcon} rounded compressed />
          </ListItemIcon>
        </ListItem>
        <Divider color="secondary" />
        <ListItem>
          <ListItemIcon>
            <div className={s.date}>
              <Typography align="center" variant="text-xl_1">
                8
              </Typography>
              <Typography align="center" variant="text-s">
                окт
              </Typography>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Ежедневный митинг"
            secondary="c 10:00 до 10:30"
          />
          <ListItemIcon>
            <IconButton icon={CalendarIcon} rounded compressed />
          </ListItemIcon>
        </ListItem>
        <Divider color="secondary" />
        <ListItem>
          <ListItemIcon>
            <div className={s.date}>
              <Typography align="center" variant="text-xl_1">
                9
              </Typography>
              <Typography align="center" variant="text-s">
                окт
              </Typography>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Ежедневный митинг"
            secondary="c 10:00 до 10:30"
          />
          <ListItemIcon>
            <IconButton icon={CalendarIcon} rounded compressed />
          </ListItemIcon>
        </ListItem>
      </List>
      <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
        Все события календаря
      </Button>
    </Stack>
  );
};
