import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { user } from '../../helpers';

import s from './BlogPage.module.css';
import { BlogPostsPagination, BlogPopularPosts } from './components';

export const BlogPage = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <>
      <Grid cols={2}>
        <GridItem col={2}>
          <Card borderWidth="none">
            <Stack
              gap="l"
              align="center"
              justify="spaceBetween"
              className={s.writeArticle}
              fullWidth
            >
              <Typography variant={isMobile ? 'text-l_1' : 'text-xl_1'}>
                🖋️ {user.name}, есть что написать?
              </Typography>
              <Button>Написать</Button>
            </Stack>
          </Card>
        </GridItem>
      </Grid>
      <Typography variant="heading-xl" as="h2">
        Популярные статьи
      </Typography>
      <BlogPopularPosts />
      <BlogPostsPagination />
    </>
  );
};
