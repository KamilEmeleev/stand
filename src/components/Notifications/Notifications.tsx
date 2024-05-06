import { FC } from 'react';

import {
  BerekeIcon,
  MessageIcon,
  SettingsIcon,
  TasksIcon,
  BrOzenIcon,
} from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Divider } from '@ozen-ui/kit/Divider';
import { File } from '@ozen-ui/kit/File';
import { Indicator } from '@ozen-ui/kit/Indicator';
import { List, ListItemButton } from '@ozen-ui/kit/List';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Popover, type PopoverProps } from '@ozen-ui/kit/Popover';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import woman from '../../assets/avatar-girl.avif';
import man from '../../assets/avatar-man.avif';

import s from './Notifications.module.css';

export const Notifications: FC<PopoverProps> = ({
  open,
  onClose,
  ...other
}) => {
  return (
    <Popover open={open} onClose={onClose} className={s.popover} {...other}>
      <Typography variant="text-l_1" className={spacing({ p: 'l' })}>
        Уведомления
      </Typography>
      <Divider role="separator" color="secondary" />
      <List className={s.list} disablePadding>
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar name="Саят Ахметов" size="xs" src={man} />
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">
                  <Typography variant="text-s_1" as="span">
                    Саят Ахметов
                  </Typography>
                  &nbsp;отправил вам запрос в друзья
                </Typography>
                <Indicator size="s" variant="success" className={s.indicator} />
              </Stack>
              <Typography variant="text-xs" color="secondary">
                8 ноября
              </Typography>
              <Stack gap="m" className={spacing({ mt: 'l' })}>
                <Stack gap="s">
                  <Button size="xs">Принять</Button>
                  <Button
                    size="xs"
                    variant="contained-additional"
                    color="secondary"
                  >
                    Отклонить
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar name="Анастасия Петрова" size="xs" src={woman} />
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">
                  <Typography variant="text-s_1" as="span">
                    Анастасия Петрова
                  </Typography>
                  &nbsp;поделилась с вами файлом
                </Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                6 ноября
              </Typography>
              <Stack gap="m" className={spacing({ mt: 'l' })}>
                <File color="primary">PDF</File>
                <Stack direction="column">
                  <Typography variant="text-s">
                    design_maket_marketplaces.pdf
                  </Typography>
                  <Typography variant="text-xs" color="tertiary">
                    256 КБ
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="MessageIcon">
              <MessageIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">
                  У вас 5 непрочитанных сообщений
                </Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                5 ноября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="Ozen">
              <BrOzenIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">Новый компонент</Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                3 сентября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="Bereke">
              <BerekeIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">Новые тарифы Банка</Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                3 сентября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="SettingsIcon">
              <SettingsIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">
                  Доступны новые обновления системы
                </Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                3 сентября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="TasksIcon">
              <TasksIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">Поступила новая задача</Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                3 сентября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
        <Divider role="separator" color="secondary" />
        <ListItemButton>
          <Stack gap="l" fullWidth align="start">
            <Avatar size="xs" name="TasksIcon">
              <TasksIcon />
            </Avatar>
            <Stack
              direction="column"
              className={spacing({ my: 'auto' })}
              fullWidth
            >
              <Stack
                gap="l"
                align="center"
                fullWidth
                justify="spaceBetween"
                className={spacing({ mb: 'xs' })}
              >
                <Typography variant="text-s">Поступила новая задача</Typography>
              </Stack>
              <Typography variant="text-xs" color="secondary">
                3 сентября
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
      </List>
    </Popover>
  );
};

export default Notifications;
