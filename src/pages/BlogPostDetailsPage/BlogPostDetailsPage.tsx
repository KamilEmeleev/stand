import { FC } from 'react';

import { ClockFilledIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Container } from '@ozen-ui/kit/Container';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/TagNext';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';

import { articles } from '../../helpers/blog.ts';
import { formatDate } from '../BlogPage/utils';

import s from './BlogPostDetailsPage.module.css';

export const BlogPostDetailsPage: FC<(typeof articles)[0]> = ({
  stream,
  title,
  author,
  minRead,
  creationDate,
  subtitle,
  text,
  previewImg,
}) => {
  return (
    <Container maxWidth="m" position="center">
      <Stack
        align="center"
        direction="column"
        gap={{ xs: '2xl', s: '4xl' }}
        fullWidth
      >
        <Card
          as={Stack}
          size="l"
          align="start"
          direction="column"
          borderWidth="none"
          gap="xl"
          fullWidth
        >
          <Stack gap="m" direction="column" align="start" fullWidth>
            <Tag label={stream} size="s" color="neutral" />
            <Typography variant="text-xl_1">{title}</Typography>
            <Typography color="secondary">{subtitle}</Typography>
            <Stack align="center" gap="m" fullWidth>
              <Avatar
                src={author?.avatar.url}
                name={author?.fullName}
                size="xs"
              />
              <Stack
                direction={{ xs: 'column' }}
                justify="spaceBetween"
                gap="xs"
                fullWidth
              >
                <Typography variant="text-m_1">
                  {author?.fullName} •{' '}
                  {creationDate && formatDate(creationDate)}
                </Typography>
                <div className={s.minRead}>
                  <Typography color="secondary">{minRead} мин</Typography>
                  <ClockFilledIcon
                    size="s"
                    className={cnTypography({ color: 'secondary' })}
                  />
                </div>
              </Stack>
            </Stack>
          </Stack>

          <img src={previewImg} alt={title} className={s.img} />
          <Typography>{text}</Typography>
        </Card>
      </Stack>
    </Container>
  );
};
