import { FC } from 'react';

import {
  BerekeIcon,
  MessageIcon,
  SettingsIcon,
  TasksIcon,
} from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Button } from '@ozen-ui/kit/Button';
import { Divider } from '@ozen-ui/kit/Divider';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  type DrawerProps,
} from '@ozen-ui/kit/Drawer';
import { File } from '@ozen-ui/kit/File';
import { Indicator } from '@ozen-ui/kit/Indicator';
import { List, ListItemButton } from '@ozen-ui/kit/List';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import woman from '../../assets/avatar-girl.avif';
import man from '../../assets/avatar-man.avif';
import { OzenLogo } from '../../icons';

import s from './Notifications.module.css';

export const Notifications: FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} size="s" className={s.drawer}>
      <DrawerHeader>
        <Typography variant="text-xl_1">Уведомления</Typography>
      </DrawerHeader>
      <DrawerBody className={spacing({ p: 0 })}>
        <List className={s.list} disablePadding>
          <Divider role="separator" color="secondary" />
          <ListItemButton>
            <Stack gap="l" fullWidth align="start">
              <Avatar size="s" name="TasksIcon">
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
                  <Typography variant="text-m">
                    Поступила новая задача
                  </Typography>
                  <Indicator size="s" variant="success" />
                </Stack>
                <Typography variant="text-xs" color="secondary">
                  час назад
                </Typography>
              </Stack>
            </Stack>
          </ListItemButton>
          <Divider role="separator" color="secondary" />
          <ListItemButton>
            <Stack gap="l" fullWidth align="start">
              <Avatar name="Саят Ахметов" size="s" src={man} />
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
                  <Typography variant="text-m">
                    <Typography variant="text-m_1" as="span">
                      Саят Ахметов
                    </Typography>
                    &nbsp;отправил вам запрос в друзья
                  </Typography>
                  <Indicator
                    size="s"
                    variant="success"
                    className={s.indicator}
                  />
                </Stack>
                <Typography variant="text-xs" color="secondary">
                  8 ноября
                </Typography>
                <Stack gap="m" className={spacing({ mt: 'l' })}>
                  <Stack gap="s">
                    <Button size="xs">Принять</Button>
                    <Button size="xs" color="secondary">
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
              <Avatar name="Анастасия Петрова" size="s" src={woman} />
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
                  <Typography variant="text-m">
                    <Typography variant="text-m_1" as="span">
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
              <Avatar size="s" name="MessageIcon">
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
                  <Typography variant="text-m">
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
              <Avatar size="s" name="Ozen">
                <OzenLogo />
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
                  <Typography variant="text-m">Новый компонент</Typography>
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
              <Avatar size="s" name="Bereke">
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
                  <Typography variant="text-m">Новые тарифы Банка</Typography>
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
              <Avatar size="s" name="SettingsIcon">
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
                  <Typography variant="text-m">
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
              <Avatar size="s" name="TasksIcon">
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
                  <Typography variant="text-m">
                    Поступила новая задача
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
              <Avatar size="s" name="TasksIcon">
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
                  <Typography variant="text-m">
                    Поступила новая задача
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
              <Avatar size="s" name="TasksIcon">
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
                  <Typography variant="text-m">
                    Поступила новая задача
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
              <Avatar size="s" name="TasksIcon">
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
                  <Typography variant="text-m">
                    Поступила новая задача
                  </Typography>
                </Stack>
                <Typography variant="text-xs" color="secondary">
                  3 сентября
                </Typography>
              </Stack>
            </Stack>
          </ListItemButton>
        </List>
      </DrawerBody>
      <Divider color="secondary" />
      <DrawerFooter className={spacing({ p: 's' })}>
        <Button color="secondary" variant="ghost" fullWidth>
          Все уведомления
        </Button>
      </DrawerFooter>
    </Drawer>
  );
};

export default Notifications;
