import { CSSProperties } from 'react';

import { ArrowRightIcon, DocumentIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Divider } from '@ozen-ui/kit/Divider';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

export const CreatedIssuesWidget = () => {
  return (
    <Stack direction="column" align="start" fullWidth>
      <Stack gap="l" className={spacing({ my: 'auto' })}>
        <Avatar
          style={
            {
              '--avatar-bg-color': 'var(--color-additional-a2)',
            } as CSSProperties
          }
        >
          <DocumentIcon />
        </Avatar>
        <Stack direction="column">
          <Typography color="tertiary">Созданных запросов</Typography>
          <Typography variant="text-2xl_1">5</Typography>
        </Stack>
      </Stack>
      <Divider color="secondary" className={spacing({ my: 'l' })} />
      <Button variant="function" iconRight={<ArrowRightIcon size="s" />}>
        Подробнее
      </Button>
    </Stack>
  );
};
