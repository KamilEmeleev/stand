import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Input } from '@ozen-ui/kit/Input';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useLocation } from 'wouter';

import { user } from '../../helpers';
import { BlogHeader } from '../BlogPage/components';

export const BlogWritePostPage = () => {
  const [, setLocation] = useLocation();

  const renderActions = () => {
    return (
      <Stack gap="m">
        <Button
          color="secondary"
          variant="contained-additional"
          onClick={() => setLocation('/blog')}
        >
          Отмена
        </Button>
        <Button>Опубликовать</Button>
      </Stack>
    );
  };

  return (
    <>
      <BlogHeader user={user} renderActions={renderActions} />
      <Card borderWidth="none">
        <Grid cols={3}>
          <GridItem col={{ xs: 3, m: 1 }}>
            <Typography variant="text-xl_1">Основная информация</Typography>
          </GridItem>
          <GridItem col={{ xs: 3, m: 2 }} as={Stack} gap="l" direction="column">
            <Input label="Название" fullWidth />
            <Input label="Краткое описание" fullWidth />
          </GridItem>
        </Grid>
      </Card>
    </>
  );
};
