import { useLayoutEffect } from 'react';

import { useEventListener } from '@ozen-ui/kit/useEventListener';

/** The hook that solves the problem described in https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
export function use1vh() {
  const set1vh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useLayoutEffect(set1vh, []);

  useEventListener({
    eventName: 'resize',
    handler: set1vh,
  });
}
