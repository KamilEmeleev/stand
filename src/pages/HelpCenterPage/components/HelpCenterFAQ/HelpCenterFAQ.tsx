import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Link } from '@ozen-ui/kit/Link';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { faq } from '../../../../helpers/help-center.ts';

export const HelpCenterFAQ = () => {
  return (
    <Stack direction="column" gap="xl">
      <Typography variant="text-xl_1" as="h2" align="center" color="secondary">
        Популярные разделы
      </Typography>
      <Grid cols={{ xs: 1, s: 3 }} gap="xl">
        {faq.map(({ id, title, description }) => (
          <GridItem
            as={Card}
            key={id}
            tabIndex={-1}
            borderWidth="none"
            interactive
          >
            <Link
              href="/"
              target="_blank"
              style={{
                inset: 0,
                position: 'absolute',
                borderRadius: 'inherit',
              }}
            />
            <Stack key={id} direction="column" gap="l" fullWidth>
              <Typography color="tertiary">{title}</Typography>
              <Typography>{description}</Typography>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};
