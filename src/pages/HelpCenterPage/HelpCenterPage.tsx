import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
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
    <Container maxWidth="m" position="center">
      <Stack
        align="center"
        direction="column"
        gap={{ xs: '2xl', s: '4xl' }}
        className={spacing({ py: isMobile ? 's' : '2xl' })}
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
        <Stack direction="column" gap={{ xs: '4xl', s: '6xl' }} fullWidth>
          <HelpCenterSearchPanel />
          <HelpCenterOnline />
          <HelpCenterFAQ />
        </Stack>
      </Stack>
    </Container>
  );
};
