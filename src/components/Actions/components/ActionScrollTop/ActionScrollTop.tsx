import { useEffect } from 'react';

import { ArrowUpIcon } from '@ozen-ui/icons';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useEventListener } from '@ozen-ui/kit/useEventListener';

import { useApp } from '../../../../AppContext.tsx';

export const ActionScrollTop = () => {
  const { scrollContainerEl } = useApp();
  const [show, { on, off }] = useBoolean(false);

  useEffect(() => {
    !scrollContainerEl && off();
  }, [off, scrollContainerEl]);

  useEventListener({
    active: !!scrollContainerEl,
    eventName: 'scroll',
    element: { current: scrollContainerEl || null },
    handler: () => {
      scrollContainerEl?.scrollTop || 0 > 100 ? on() : off();
    },
  });

  const handleClick = () => {
    scrollContainerEl?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <IconButton
        icon={ArrowUpIcon}
        variant="contained"
        color="tertiary"
        onClick={handleClick}
        compressed
        rounded
      />
    )
  );
};
