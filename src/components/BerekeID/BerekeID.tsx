import { BerekeIcon } from '@ozen-ui/icons';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import s from './BerekeID.module.css';

export const BerekeID = () => {
  return (
    <Stack align="center" gap="l" justify="spaceBetween" fullWidth>
      <Stack align="center" gap="s" className={s.id}>
        <BerekeIcon />
        <Typography variant="text-l_1" color="actionOn">
          ID
        </Typography>
      </Stack>
    </Stack>
  );
};
