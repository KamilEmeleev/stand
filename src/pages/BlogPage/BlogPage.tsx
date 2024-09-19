import { Stack } from '@ozen-ui/kit/Stack';

import { user } from '../../helpers';

import {
  BlogPostsPagination,
  BlogPopularPosts,
  BlogHeader,
} from './components';

export const BlogPage = () => {
  return (
    <Stack gap="2xl" direction="column">
      <BlogHeader user={user} />
      <BlogPopularPosts />
      <BlogPostsPagination />
    </Stack>
  );
};
