import { Card } from '@ozen-ui/kit/Card';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { MDX } from '../../../ozenbook';

import Contributing from './Contributing.mdx';

export const ContributingPage = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <Card
      as={Stack}
      borderWidth="none"
      direction="column"
      gap="2xl"
      className={spacing({ p: isMobile ? 'xl' : '3xl' })}
      fullWidth
    >
      <MDX>
        <Contributing />
      </MDX>
    </Card>
  );
};
