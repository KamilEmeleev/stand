import { FC } from 'react';

import { ClockFilledIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/TagNext';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';

import { Image } from '../../components';
import { BlogArticle } from '../../helpers/blog.ts';
import { MDX } from '../../ozenbook';
import { formatDate } from '../BlogPage/utils';

import s from './BlogPostDetailsPage.module.css';

export const BlogPostDetailsPage: FC<BlogArticle> = ({
  stream,
  title,
  author,
  minRead,
  creationDate,
  markdown: Markdown,
  previewImg,
}) => {
  return (
    <Container maxWidth="m" position="center">
      <Card
        as={Stack}
        size="l"
        align="start"
        direction="column"
        borderWidth="none"
        gap="xl"
        fullWidth
      >
        <Stack gap="l" direction="column" align="start" fullWidth>
          <Stack gap="s" wrap>
            {stream.map((label) => (
              <Tag label={label} key={label} size="s" color="neutral" />
            ))}
          </Stack>

          <Typography
            variant="heading-2xl"
            as="h1"
            className={spacing({ my: 'm' })}
          >
            {title}
          </Typography>

          <Stack align="center" gap="m" fullWidth>
            <Avatar
              src={author?.avatar?.url}
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
                {author?.fullName} • {creationDate && formatDate(creationDate)}
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

          <Image src={previewImg} alt={title} className={s.img} />
        </Stack>
        {Markdown && (
          <MDX>
            <Markdown />
          </MDX>
        )}
      </Card>
    </Container>
  );
};
