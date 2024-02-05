import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import {
  HelpCenterFAQ,
  HelpCenterSearchPanel,
  HelpCenterOnline,
} from './components';

export const HelpCenterPage = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <Stack
      align="center"
      direction="column"
      gap={{ xs: '2xl', m: '3xl' }}
      fullWidth
    >
      <Stack direction="column" gap="m">
        <Typography
          as="h1"
          align="center"
          variant={isMobile ? 'heading-xl' : 'heading-2xl'}
        >
          Привет, как мы можем вам помочь?
        </Typography>
        {!isMobile && (
          <Typography color="secondary" align="center">
            Всё, что нужно знать о нашей платформе и даже чуточку больше
          </Typography>
        )}
      </Stack>
      <Stack direction="column" gap="3xl" fullWidth>
        <HelpCenterSearchPanel />
        <HelpCenterOnline />
        <HelpCenterFAQ />
      </Stack>
    </Stack>
  );
};
