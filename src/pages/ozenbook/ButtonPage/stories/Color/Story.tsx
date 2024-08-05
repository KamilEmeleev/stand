import { FrameIcon } from '@ozen-ui/icons';
import {
  Button,
  buttonColorVariant,
  buttonVariant,
} from '@ozen-ui/kit/ButtonNext';
import { FormTitle } from '@ozen-ui/kit/FormTitle';
import { Stack } from '@ozen-ui/kit/Stack';

export const Story = () => (
  <Stack gap="2xl" direction="column" fullWidth>
    {buttonColorVariant.map((color) => (
      <Stack key={color} direction="column" fullWidth>
        <FormTitle>color = {color}</FormTitle>
        <Stack gap="xl" align="center" wrap fullWidth>
          {buttonVariant.map((variant) => (
            <Button
              key={variant}
              iconLeft={FrameIcon}
              variant={variant}
              color={color}
            >
              {variant}
            </Button>
          ))}
        </Stack>
      </Stack>
    ))}
  </Stack>
);
