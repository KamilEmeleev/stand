import { CheckIcon } from '@ozen-ui/icons';
import {
  type FormElementSizeVariant,
  formElementSizeVariant,
} from '@ozen-ui/kit/__inner__/esm/types/FormElementSizeVariant';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';

export const Story = () => (
  <Stack gap="m" direction={{ xs: 'column', s: 'row' }} align="center">
    {formElementSizeVariant.map((size: FormElementSizeVariant) => (
      <Button variant="contained" size={size} key={size} iconLeft={CheckIcon}>
        {`Размер ${size}`}
      </Button>
    ))}
  </Stack>
);
