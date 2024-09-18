import { useEffect, useMemo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import root from 'react-shadow';
import {
  extendTheme,
  type Theme,
  ThemeProvider,
  useTheme,
} from '@ozen-ui/kit/ThemeProvider';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

declare global {
  interface Window {
    'css__remote_app__./Share': any;
  }
}
window['css__remote_app__./Share'] = window['css__remote_app__./Share'] || {};

export type RemoteProviderProps = { theme?: Theme; children?: ReactNode };

export const RemoteProvider: FC<RemoteProviderProps> = ({
  theme,
  children,
}) => {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [ready, { on }] = useBoolean(false);
  const innerTheme = useTheme();

  const loadStylesheets = (node: HTMLElement) => {
    const hrefs = window['css__remote_app__./Share'];

    if (hrefs && node?.shadowRoot) {
      hrefs.forEach((href: string) => {
        const link = document.createElement('link');
        link.href = href;
        link.rel = 'stylesheet';
        link.onload = on;
        node.shadowRoot?.appendChild(link);
      });
    }
  };

  useEffect(() => {
    if (nodeRef.current) {
      loadStylesheets(nodeRef.current);
    }
  }, [nodeRef.current]);

  const customTheme = useMemo(() => {
    if (!theme || !nodeRef.current) return undefined;

    return extendTheme(theme, {
      defaultProps: {
        Portal: {
          container: nodeRef.current.shadowRoot,
        },
      },
    });
  }, [theme, nodeRef.current]);

  return (
    <root.div ref={nodeRef}>
      {ready && (
        <ThemeProvider theme={customTheme || innerTheme}>
          <Card
            gap="m"
            as={Stack}
            direction="column"
            borderVariant="dashed"
            borderWidth="m"
            fullWidth
          >
            <Typography variant="heading-xl">Remote App</Typography>
            {children}
          </Card>
        </ThemeProvider>
      )}
    </root.div>
  );
};
