import { BurgerIcon } from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

import { useAppBar } from '../AppBar';

export const BurgerMenu = () => {
  const { m } = useBreakpoints();
  const [[, { toggle: toggleAppbar }]] = useAppBar();
  const isMobile = !m;

  return isMobile ? (
    <IconButton
      variant="ghost"
      icon={BurgerIcon}
      onClick={toggleAppbar}
      className={spacing({ mr: 'xs' })}
      compressed
    />
  ) : null;
};
