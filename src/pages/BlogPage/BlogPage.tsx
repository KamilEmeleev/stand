import { Typography } from '@ozen-ui/kit/Typography';

import { user } from '../../helpers';

import {
  BlogPostsPagination,
  BlogPopularPosts,
  BlogHeader,
} from './components';

export const BlogPage = () => {
  return (
    <>
      <BlogHeader user={user} />
      <Typography variant="heading-xl" as="h2">
        Популярные статьи
      </Typography>
      <BlogPopularPosts />
      <BlogPostsPagination />
    </>
  );
};
