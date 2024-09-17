import { RefreshIcon, SettingsIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@ozen-ui/kit/Drawer';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { useThemeSwitcher } from '../../../../AppContext.tsx';
import { Settings } from '../../../Settings';

import s from './ActionSetting.module.css';

export const ActionSettings = () => {
  const [open, { toggle, off }] = useBoolean(false);
  const [, , reset] = useThemeSwitcher();

  return (
    <>
      <Tooltip
        arrow={false}
        size="xs"
        disabled={open}
        placement="left"
        label="Настроить приложение"
      >
        <IconButton
          icon={SettingsIcon}
          onClick={toggle}
          variant="contained"
          compressed
          rounded
        />
      </Tooltip>
      <Drawer
        size="s"
        open={open}
        onClose={off}
        placement="right"
        windowProps={{
          className: s.drawer,
        }}
        hideCloseButton
        hideBackdrop
      >
        <DrawerHeader>
          <DrawerTitle>
            <Stack gap="m" align="center" justify="spaceBetween" fullWidth>
              <Typography variant="text-xl_1">Настройки</Typography>
              <IconButton icon={RefreshIcon} onClick={reset} compressed />
            </Stack>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Settings />
        </DrawerBody>
        <DrawerFooter>
          <Button
            onClick={off}
            color="secondary"
            variant="contained-additional"
            fullWidth
          >
            Закрыть
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
};
