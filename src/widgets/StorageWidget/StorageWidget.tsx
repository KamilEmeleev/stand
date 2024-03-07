import { useRef } from 'react';

import {
  FolderIcon,
  ImageIcon,
  MenuHorizontalIcon,
  UploadCloudIcon,
  VideoOnIcon,
} from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { Menu, MenuItem, MenuItemIcon, MenuItemText } from '@ozen-ui/kit/Menu';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { ProgressBar } from '@ozen-ui/kit/ProgressBar';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

import s from './StorageWidget.module.css';

export const StorageWidget = () => {
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const [open, { toggle, off }] = useBoolean(false);

  return (
    <Stack direction="column" gap="l" align="center" fullWidth>
      <Stack className={spacing({ mb: 'auto' })} fullWidth>
        <IconButton
          ref={menuRef}
          icon={MenuHorizontalIcon}
          className={spacing({ ml: 'auto' })}
          variant="ghost"
          onClick={toggle}
          color="secondary"
          compressed
        />
        <Menu
          open={open}
          anchorRef={menuRef}
          placement="bottom-start"
          menuListProps={{ size: 'm' }}
          onClose={off}
        >
          <MenuItem>
            <MenuItemIcon>
              <ImageIcon />
            </MenuItemIcon>
            <MenuItemText primary="Изображения" />
          </MenuItem>
          <MenuItem>
            <MenuItemIcon>
              <VideoOnIcon />
            </MenuItemIcon>
            <MenuItemText primary="Видео" />
          </MenuItem>
          <MenuItem>
            <MenuItemIcon>
              <FolderIcon />
            </MenuItemIcon>
            <MenuItemText primary="Документы" />
          </MenuItem>
        </Menu>
      </Stack>
      <div className={s.iconContainer}>
        <UploadCloudIcon />
      </div>
      <Typography variant="text-xl_1" align="center">
        BCloud
      </Typography>
      <Typography
        color="tertiary"
        align="center"
        className={spacing({ px: '3xl' })}
      >
        Контролируйте свое дисковое пространство самым простым способом
      </Typography>
      <Stack
        direction="column"
        gap="s"
        className={spacing({ mt: 'auto' })}
        fullWidth
      >
        <Stack justify="spaceBetween">
          <Typography color="tertiary">25.4 GB</Typography>
          <Typography color="tertiary">50 GB</Typography>
        </Stack>
        <ProgressBar value={50} style={{ width: '100%' }} />
      </Stack>
    </Stack>
  );
};
