import type { FC } from 'react';

import { Drawer } from '@ozen-ui/kit/Drawer';
import { Paper } from '@ozen-ui/kit/Paper';
import { Stack, type StackProps } from '@ozen-ui/kit/Stack';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import s from './AppBar.module.css';
import { AppBarSwitcher } from './components';
import { useAppBar } from './useAppBar';

type AppBarProps = StackProps;

export const AppBar: FC<AppBarProps> = ({ children }) => {
  const [openState, expandState] = useAppBar();
  const [expand, { on: expandOn, off: expandOff }] = expandState;
  const [open, { off: openOff }] = openState;
  const { m } = useBreakpoints();
  const isMobile = !m;

  return (
    <>
      {!isMobile && (
        <Paper background="accent" className="AppBar">
          <Stack
            className="Toolbar"
            data-expand={expand}
            direction="column"
            gap="m"
          >
            {children}
          </Stack>
          <AppBarSwitcher onOpen={expandOn} onClose={expandOff} open={expand} />
        </Paper>
      )}
      {isMobile && (
        <Drawer
          placement="left"
          variant="little"
          open={open}
          className="AppBarMobile"
          onClose={openOff}
          windowProps={{
            className: s.window,
            background: 'accent',
          }}
          hideCloseButton
        >
          <Stack className="Toolbar" data-expand direction="column" gap="m">
            {children}
          </Stack>
        </Drawer>
      )}
    </>
  );
};
