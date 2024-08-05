import { DeleteIcon, PlusIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';

export const Story = () => (
  <Stack as="section" gap="m" direction="column">
    <Stack gap="m" direction={{ xs: 'column', s: 'row' }}>
      <Button iconLeft={PlusIcon}>Добавить</Button>
      <Button iconRight={DeleteIcon} color="error">
        Удалить
      </Button>
    </Stack>
    <Stack gap="m" direction={{ xs: 'column', s: 'row' }}>
      <Button iconLeft={<PlusIcon />} variant="ghost">
        Добавить
      </Button>
      <Button iconRight={<DeleteIcon />} variant="ghost" color="error">
        Удалить
      </Button>
    </Stack>
  </Stack>
);
