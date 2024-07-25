import { ArrowLeftIcon, ArrowRightIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';

export const BlogPostsPagination = () => {
  return (
    <Stack
      align="center"
      gap="l"
      justify="center"
      className={spacing({ my: 'm' })}
    >
      <Button
        variant="function"
        iconLeft={ArrowLeftIcon}
        color="secondary"
        disabled
      >
        Туда
      </Button>
      <Button variant="function" iconRight={ArrowRightIcon} color="secondary">
        Сюда
      </Button>
    </Stack>
  );
};
