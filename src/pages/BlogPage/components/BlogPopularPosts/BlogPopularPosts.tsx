import { ClockFilledIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Link } from '@ozen-ui/kit/Link';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/TagNext';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';
import { Link as WouterLink } from 'wouter';

import { blogs } from '../../../../helpers/blog.ts';
import s from '../../BlogPage.module.css';
import { formatDate } from '../../utils';

export const BlogPopularPosts = () => {
  return (
    <Grid cols={2}>
      {blogs.map(
        ({
          title,
          id,
          subtitle,
          previewImg,
          stream,
          author,
          minRead,
          creationDate,
        }) => {
          return (
            <GridItem col={{ xs: 2, m: 1 }} key={id}>
              <Card
                gap="0"
                as={Stack}
                tabIndex={-1}
                borderWidth="none"
                direction="column"
                className={spacing({ p: 0 })}
                interactive
                fullWidth
              >
                <WouterLink to={`/blog/post/${id}`} asChild>
                  <Link
                    style={{
                      inset: 0,
                      position: 'absolute',
                      borderRadius: 'inherit',
                    }}
                  />
                </WouterLink>
                <img alt={subtitle} src={previewImg} className={s.img} />
                <div className={s.content}>
                  <Stack gap="s">
                    {stream.map((label, index) => (
                      <Tag label={label} size="s" color="neutral" key={index} />
                    ))}
                  </Stack>

                  <Typography variant="text-xl_1">{title}</Typography>
                  <Typography color="secondary">{subtitle}</Typography>
                  <Stack align="center" gap="m" fullWidth>
                    <Avatar
                      src={author?.avatar?.url}
                      name={author.fullName}
                      size="xs"
                    />
                    <Stack
                      direction={{ xs: 'column', m: 'row' }}
                      justify="spaceBetween"
                      gap="xs"
                      fullWidth
                    >
                      <Typography variant="text-m_1">
                        {author.fullName} • {formatDate(creationDate)}
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
                </div>
              </Card>
            </GridItem>
          );
        }
      )}
    </Grid>
  );
};
