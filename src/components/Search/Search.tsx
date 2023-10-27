import { SearchIcon } from '@ozen-ui/icons';
import { Dialog } from '@ozen-ui/kit/Dialog';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useEventListener } from '@ozen-ui/kit/useEventListener';

import s from './Search.module.css';

/** Глобальный поиск по приложению */
export const Search = () => {
  const [open, { on, off, toggle }] = useBoolean(false);
  const { s: small } = useBreakpoints();
  const isMobile = !small;

  // Поиск с клавиатуры
  useEventListener({
    eventName: 'keydown',
    handler: (e) => {
      // Ctrl + /
      if (e.ctrlKey && e.keyCode == 191) {
        toggle();
      }

      return true;
    },
  });

  return (
    <>
      <Stack gap="xs" align="center" onClick={on}>
        <IconButton
          variant="ghost"
          icon={SearchIcon}
          className={spacing({ mr: 'xs' })}
          compressed
        />
        <Typography color="tertiary" className={s.text} noWrap>
          {isMobile ? 'Поиск' : 'Поиск (Ctrl + /)'}
        </Typography>
      </Stack>
      <Dialog
        open={open}
        onClose={off}
        backdropProps={{
          className: s.searchBackdrop,
        }}
        hideCloseButton
      >
        <div className={s.searchIcon}>
          <SearchIcon />
        </div>
        <input className={s.searchInput} placeholder="Найти…" autoFocus />
      </Dialog>
    </>
  );
};
