import { FormEvent } from 'react';

import {
  ArrowRightIcon,
  ChevronRightIcon,
  CrownFilledIcon,
  HeartFilledIcon,
  StarFilledIcon,
} from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Button } from '@ozen-ui/kit/Button';
import { Card } from '@ozen-ui/kit/Card';
import { Checkbox } from '@ozen-ui/kit/Checkbox';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { Input } from '@ozen-ui/kit/Input';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Segment, SegmentItem } from '@ozen-ui/kit/Segment';
import { Option, Select } from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from '@ozen-ui/kit/Table';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { FigmaIcon } from './assets/FigmaIcon.tsx';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import s from './LiveCodingPage.module.css';

const table = [
  {
    avatar: img1,
    name: 'Идея',
    description: 'Все понемногу 😎',
    user_id: '@mnenepishi',
    user_name: 'Вагиз',
  },
  {
    avatar: img2,
    name: 'UI-Kit Design',
    description: 'Figma',
    user_id: '@natastereo8',
    user_name: 'Вагиз',
  },
  {
    avatar: img3,
    name: 'Дока',
    description: 'StoryBook',
    user_id: '@Emeleev',
    user_name: 'Камил',
  },
  {
    avatar: img4,
    name: 'Библиотека React',
    description: 'GitHub',
    user_id: '@Emeleev',
    user_name: 'Камил',
  },
  {
    avatar: img5,
    name: 'Библиотека iOS',
    description: 'XCode',
    user_id: '@pnzr00t',
    user_name: 'Олег',
  },
  {
    avatar: img6,
    name: 'Библиотека Android',
    description: 'А тут магия 🔮',
    user_id: '@krauzze\n@ugorbunov',
    user_name: 'Саша\nЮра',
  },
];

export const LiveCoding = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit');
  };

  return (
    <>
      <Grid gap="l">
        <GridItem col={{ xs: 12, m: 8 }}>
          <Grid gap="l" cols={{ xs: 1, m: 3 }}>
            <GridItem>
              <Card
                borderWidth="none"
                size="l"
                className={spacing({ p: 'xl' })}
              >
                <Stack gap="l">
                  <Avatar size="s" className={s.ava1}>
                    <StarFilledIcon size="s" />
                  </Avatar>
                  <Stack direction="column" gap="xl">
                    <Stack direction="column">
                      <Typography variant="text-xl_1">82</Typography>
                      <Typography variant="text-xs">компонента</Typography>
                    </Stack>
                    <Button
                      variant="function"
                      size="s"
                      iconRight={ArrowRightIcon}
                      className={spacing({ mt: 'auto' })}
                    >
                      Начать работу
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                borderWidth="none"
                size="l"
                className={spacing({ p: 'xl' })}
              >
                <Stack gap="l">
                  <Avatar size="s" className={s.ava2}>
                    <CrownFilledIcon size="s" />
                  </Avatar>
                  <Stack direction="column" gap="xl">
                    <Stack direction="column">
                      <Typography variant="text-xl_1">8</Typography>
                      <Typography variant="text-xs">спринтов</Typography>
                    </Stack>
                    <Button
                      variant="function"
                      size="s"
                      iconRight={ArrowRightIcon}
                      className={spacing({ mt: 'auto' })}
                    >
                      Как это было
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                borderWidth="none"
                size="l"
                className={spacing({ p: 'xl' })}
              >
                <Stack gap="l">
                  <Avatar size="s" className={s.ava3}>
                    <HeartFilledIcon size="s" />
                  </Avatar>
                  <Stack direction="column" gap="xl">
                    <Stack direction="column">
                      <Typography variant="text-xl_1">6</Typography>
                      <Typography variant="text-xs">человек</Typography>
                    </Stack>
                    <Button
                      variant="function"
                      size="s"
                      iconRight={ArrowRightIcon}
                      className={spacing({ mt: 'auto' })}
                    >
                      Познакомиться
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          col={{ xs: 12, m: 4 }}
          colStart={{ xs: 1, m: 1 }}
          as={Card}
          className={spacing({ p: 'xl' })}
          borderWidth="none"
          size="l"
        >
          <Stack direction="column" as="form" onSubmit={handleSubmit} fullWidth>
            <Stack direction="column" gap="xs">
              <Typography variant="text-l_1">
                Присоединяйся к команде! 🔥
              </Typography>
              <Typography variant="text-s" color="secondary">
                Заполните заявку и станьте частью корабля
              </Typography>
            </Stack>
            <Segment
              defaultValue="tomato"
              className={spacing({ my: 'xl' })}
              size="s"
              fullWidth
            >
              <SegmentItem value="male">
                {isMobile ? 'Mальчик' : 'Я – мальчик'}
              </SegmentItem>
              <SegmentItem value="female">
                {isMobile ? 'Девочка' : 'Я – девочка'}
              </SegmentItem>
              <SegmentItem value="tomato">
                {isMobile ? 'Томат' : 'Я – томат'}
              </SegmentItem>
            </Segment>
            <Input size="s" label="Как тебя зовут?" hint="" fullWidth />
            <Input size="s" label="Где ты живёшь?" hint="" fullWidth />
            <Select
              size="s"
              label="Сколько лет ты уже варишься в IT?"
              hint=" "
              fullWidth
            >
              <Option value={1}>1 год</Option>
              <Option value={5}>5 лет</Option>
              <Option value={10}>10 лет</Option>
            </Select>
            <Checkbox
              className={spacing({ mb: 'auto' })}
              size="s"
              label="Я посмотрел все серии Времени приключений!"
            />
            <Stack
              align="center"
              gap="m"
              justify="end"
              className={spacing({ mt: 'xl' })}
              fullWidth
            >
              <Button size="s" variant="function">
                Я уже с вами, котятки!
              </Button>
              <Button type="submit" size="s">
                Присоединиться
              </Button>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem
          col={{ xs: 12, m: 8 }}
          as={Card}
          borderWidth="none"
          size="l"
          className={spacing({ p: 'xl' })}
        >
          <Stack direction="column" gap="xl" fullWidth>
            <Stack direction="column" gap="xs">
              <Typography variant="text-l_1">
                Что есть у нас в коробке?
              </Typography>
              <Typography variant="text-s" color="secondary">
                Дизайн-система – это не только кнопочки, это намного больше
              </Typography>
            </Stack>
            <TableContainer>
              <Table size="s" fullWidth>
                <TableBody>
                  {table.map(
                    ({ avatar, name, user_name, user_id, description }) => (
                      <TableRow tabIndex={-1} key={name} hover>
                        <TableCell verticalAlign="middle">
                          <Stack gap="m" align="center">
                            <Avatar name={name} src={avatar} size="2xs" />
                            {name}
                          </Stack>
                        </TableCell>
                        <TableCell verticalAlign="middle">
                          {description}
                        </TableCell>
                        <TableCell verticalAlign="middle" className={s.preLine}>
                          {user_id}
                        </TableCell>
                        <TableCell verticalAlign="middle" className={s.preLine}>
                          {user_name}
                        </TableCell>
                        <TableCell verticalAlign="middle" align="right">
                          <IconButton
                            icon={ChevronRightIcon}
                            size="s"
                            compressed
                          />
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </GridItem>
      </Grid>
      <div className={s.actions}>
        <Tooltip arrow={false} placement="top" size="xs" label="Макет">
          <IconButton
            icon={FigmaIcon}
            variant="floating"
            target="_blank"
            rounded
            as="a"
            href="https://www.figma.com/file/h2zzCj659L0pyzA9FamCuG/Assets-Core-%7C-%C3%96zen?node-id=7%3A195&mode=dev"
          />
        </Tooltip>
      </div>
    </>
  );
};
