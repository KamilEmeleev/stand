import { ClockFilledIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Link } from '@ozen-ui/kit/Link';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/TagNext';
import { cnTypography, Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Link as WouterLink } from 'wouter';

import { Image } from '../../../../components';
import { blogs } from '../../../../helpers/blog.ts';
import s from '../../BlogPage.module.css';
import { formatDate } from '../../utils';

export const BlogPopularPosts = () => {
  const { s: small } = useBreakpoints();
  const isMobile = !small;

  return (
    <Stack direction="column" gap="l">
      <Typography variant="heading-xl" as="h2">
        Популярные статьи
      </Typography>
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
              <GridItem
                col={{ xs: 2, s: 2, m: 2, l: 1 }}
                key={id}
                className={s.gridItem}
              >
                <Card
                  gap="0"
                  as={Stack}
                  tabIndex={-1}
                  borderWidth="none"
                  direction="column"
                  className={s.card}
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
                  <Image alt={subtitle} src={previewImg} className={s.img} />
                  <div className={s.content}>
                    <Stack gap="s" wrap>
                      {stream.map((label, index) => (
                        <Tag
                          label={label}
                          size="s"
                          color="neutral"
                          key={index}
                        />
                      ))}
                    </Stack>

                    <Typography variant="text-xl_1">{title}</Typography>
                    <Typography color="secondary">{subtitle}</Typography>
                    <Stack
                      align="center"
                      gap="m"
                      fullWidth
                      className={spacing({ mt: 'auto' })}
                    >
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
                        <Typography
                          variant={isMobile ? 'text-s_1' : 'text-m_1'}
                        >
                          {author.fullName} • {formatDate(creationDate)}
                        </Typography>
                        <div className={s.minRead}>
                          <Typography color="secondary">
                            {minRead} мин
                          </Typography>
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
    </Stack>
  );
};
