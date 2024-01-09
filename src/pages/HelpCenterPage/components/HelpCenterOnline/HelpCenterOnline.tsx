import { CSSProperties } from 'react';

import { ChatsIcon, MicOnIcon, SendIcon } from '@ozen-ui/icons';
import { Avatar } from '@ozen-ui/kit/Avatar';
import { Card } from '@ozen-ui/kit/Card';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Link } from '@ozen-ui/kit/Link';
import { Stack } from '@ozen-ui/kit/Stack';

export const HelpCenterOnline = () => {
  return (
    <Stack direction="column" gap="xl">
      <Grid cols={{ xs: 1, s: 3 }} gap="xl">
        <GridItem as={Card} tabIndex={-1} borderWidth="none" interactive>
          <Link
            href="/"
            target="_blank"
            style={{
              inset: 0,
              position: 'absolute',
              borderRadius: 'inherit',
            }}
          />
          <Stack direction="row" gap="l" align="center" fullWidth>
            <Avatar
              size="xs"
              style={
                {
                  '--avatar-bg-color': 'var(--color-background-secondary)',
                  '--avatar-color': 'var(--color-content-primary)',
                } as CSSProperties
              }
            >
              <SendIcon />
            </Avatar>
            Телеграм-канал
          </Stack>
        </GridItem>
        <GridItem as={Card} tabIndex={-1} borderWidth="none" interactive>
          <Link
            href="/"
            target="_blank"
            style={{
              inset: 0,
              position: 'absolute',
              borderRadius: 'inherit',
            }}
          />
          <Stack direction="row" gap="l" align="center" fullWidth>
            <Avatar
              size="xs"
              style={
                {
                  '--avatar-bg-color': 'var(--color-background-secondary)',
                  '--avatar-color': 'var(--color-content-primary)',
                } as CSSProperties
              }
            >
              <MicOnIcon />
            </Avatar>
            Голосовой помощник
          </Stack>
        </GridItem>
        <GridItem as={Card} tabIndex={-1} borderWidth="none" interactive>
          <Link
            href="/"
            target="_blank"
            style={{
              inset: 0,
              position: 'absolute',
              borderRadius: 'inherit',
            }}
          />
          <Stack direction="row" gap="l" align="center" fullWidth>
            <Avatar
              size="xs"
              style={
                {
                  '--avatar-bg-color': 'var(--color-background-secondary)',
                  '--avatar-color': 'var(--color-content-primary)',
                } as CSSProperties
              }
            >
              <ChatsIcon />
            </Avatar>
            Онлайн-чат
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};
