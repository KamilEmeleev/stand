import { ChatsIcon, MicOnIcon, SendIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Card } from '@ozen-ui/kit/Card';
import { Container } from '@ozen-ui/kit/Container';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { HelpCenterFAQ, HelpCenterSearchPanel } from './components';

export const HelpCenterPage = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <Container maxWidth="m" position="center" style={{ height: '100%' }}>
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
          <Typography color="secondary" align="center">
            Всё, что нужно знать о нашей платформе и даже чуточку больше
          </Typography>
        </Stack>
        <Card
          as={Stack}
          direction="column"
          borderWidth="none"
          className={spacing({ p: 0 })}
          fullWidth
        >
          <HelpCenterSearchPanel />
          <Stack
            align="center"
            justify="center"
            direction="column"
            gap="2xl"
            className={spacing({ p: '2xl' })}
          >
            <Typography variant="text-xl_1" as="h2" align="center">
              Всегда на связи
            </Typography>
            <Stack gap="l" direction={{ xs: 'column', s: 'row' }}>
              <Button iconLeft={ChatsIcon} variant="outlined" color="secondary">
                Онлайн-чат
              </Button>
              <Button iconLeft={SendIcon} variant="outlined" color="secondary">
                Телеграм-канал
              </Button>
              <Button iconLeft={MicOnIcon} variant="outlined" color="secondary">
                Голосовой помощник
              </Button>
            </Stack>
          </Stack>
          <HelpCenterFAQ />
        </Card>
      </Stack>
    </Container>
  );
};
