import { FC } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useDebounceCallback } from '@ozen-ui/kit/useDebounceCallback';

import './AppBarSwitcher.css';

type AppBarSwitcherProps = {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const AppBarSwitcher: FC<AppBarSwitcherProps> = ({
  open = false,
  onOpen,
  onClose,
}) => {
  const [toggleIsVisible, { on, off }] = useBoolean(false);

  const handleHover = (open: boolean) => {
    if (open) {
      on();
    } else {
      off();
    }
  };

  const [debounceHover] = useDebounceCallback(
    handleHover,
    toggleIsVisible ? 1000 : 50
  );

  const handleMouseEnter = () => {
    debounceHover(true);
  };

  const handleMouseLeave = () => {
    debounceHover(false);
  };

  return (
    <div
      className="AppBarSwitcher"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton
        className="AppBarSwitcher-Icon"
        variant="floating"
        size="2xs"
        onClick={open ? onClose : onOpen}
        icon={open ? ArrowLeftIcon : ArrowRightIcon}
        style={{
          visibility: toggleIsVisible ? 'visible' : 'hidden',
        }}
        compressed
      />
    </div>
  );
};
