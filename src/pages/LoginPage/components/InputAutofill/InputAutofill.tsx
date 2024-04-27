import { forwardRef, useState } from 'react';

import { Input, type InputProps } from '@ozen-ui/kit/Input';

import s from './InputAutofill.module.css';

export const InputAutofill = forwardRef<HTMLDivElement, InputProps>(
  ({ labelProps, inputProps, ...other }, ref) => {
    const [filled, setFilled] = useState<boolean | undefined>(false);

    return (
      <Input
        labelProps={{ ...labelProps, filled }}
        inputProps={{
          ...inputProps,
          className: s.input,
          onBlur: () => setFilled(undefined),
          onAnimationStart: (e) => {
            setFilled(e.animationName.includes('autofill-start'));
          },
        }}
        {...other}
        ref={ref}
      />
    );
  }
);
