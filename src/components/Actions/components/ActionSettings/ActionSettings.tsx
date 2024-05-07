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
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import { useApp } from '../../../../AppContext.tsx';
import { Settings } from '../../../Settings';

import s from './ActionSetting.module.css';

const ACTION_SETTINGS_NAME = 'Настройки приложения';

export const ActionSettings = () => {
  const {
    settings: { reset },
  } = useApp();

  const [open, { toggle, off }] = useBoolean(false);

  return (
    <>
      <Tooltip
        arrow={false}
        size="xs"
        placement="left"
        label={ACTION_SETTINGS_NAME}
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
        hideBackdrop
      >
        <DrawerHeader>
          <DrawerTitle>
            <Typography variant="text-xl_1">{ACTION_SETTINGS_NAME}</Typography>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Settings />
        </DrawerBody>
        <DrawerFooter>
          <Button
            fullWidth
            onClick={reset}
            iconLeft={RefreshIcon}
            variant="contained-additional"
            color="secondary"
          >
            Сбросить настройки
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
};
