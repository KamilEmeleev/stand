import { BrBerekeFilledColoredIcon, ExternalLinkIcon } from '@ozen-ui/icons';
import { Card } from '@ozen-ui/kit/Card';
import { Link } from '@ozen-ui/kit/Link';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { OzenLogo } from '../../icons';

import s from './ProjectsWidget.module.css';

const projects = [
  {
    id: '1',
    icon: OzenLogo,
    name: 'Дизайн-система «Ozen»',
    link: 'https://ozen-ui.netlify.app/',
  },
  {
    id: '2',
    icon: BrBerekeFilledColoredIcon,
    name: 'Интернет-банк «B-Business»',
    link: 'https://business.berekebank.kz/',
  },
  {
    id: '3',
    icon: BrBerekeFilledColoredIcon,
    name: 'Интернет-банк «B-bank»',
    link: 'https://berekebank.kz/kz',
  },
];

export const ProjectsWidget = () => {
  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Typography variant="text-xl_1">Проекты</Typography>
      <Typography color="tertiary">
        Здесь вы можете найти более подробную информацию о ваших проектах.
      </Typography>
      <Stack direction="column" fullWidth gap="l">
        {projects.map(({ id, name, link, icon: Icon }) => {
          return (
            <Card borderWidth="s" key={id} interactive tabIndex={-1}>
              <Stack justify="spaceBetween" align="center" gap="s" fullWidth>
                <Icon />
                <Typography variant="text-m_1">{name}</Typography>
                <ExternalLinkIcon className={s.icon} />
              </Stack>
              <Link href={link} target="_blank" className={s.link} />
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};
