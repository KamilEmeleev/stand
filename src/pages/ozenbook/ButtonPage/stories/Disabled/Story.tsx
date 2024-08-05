import {
  Button,
  type ButtonVariant,
  buttonVariant,
} from '@ozen-ui/kit/ButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';

export const Story = () => (
  <Stack gap="m" direction={{ xs: 'column', s: 'row' }} align="center">
    {buttonVariant.map((variant: ButtonVariant) => (
      <Button variant={variant} key={variant} disabled>
        {variant.slice(0, 1).toUpperCase() + variant.slice(1)}
      </Button>
    ))}
  </Stack>
);
