import { forwardRef, useState } from 'react';
import type { ChangeEvent, AnimationEvent } from 'react';

import { Input, type InputProps } from '@ozen-ui/kit/Input';
import { useControlled } from '@ozen-ui/kit/useControlled';

import s from './InputAutofill.module.css';

export const InputAutofill = forwardRef<HTMLDivElement, InputProps>(
  (
    { value: valueProp, defaultValue, labelProps, inputProps, ...other },
    ref
  ) => {
    const [filled, setFilled] = useState<boolean | undefined>(false);
    const [focus, setFocus] = useState<boolean | undefined>(false);

    const [value, setValue] = useControlled({
      defaultValue,
      value: valueProp,
      name: 'InputAutofill',
    });

    // Свойство shrink в labelProps: если {true} «приподнимает» лейб к верху текстового поля.
    // Контролируем поведение для shrink в нашем компоненте.
    // Состояние filled определяется по признаку автозаполнения поля браузером —
    // ловим это через анимацию в стилях (см. InputAutofill.module.css).
    // При браузерном событие автозаполнения поля не срабатывает фокус.
    const shrink = filled || focus || !!value || value === 0;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    };

    const handleFocus = () => {
      setFocus(true);
    };

    const handleBlur = () => {
      setFocus(false);
    };

    const handleAnimationStart = (e: AnimationEvent<HTMLInputElement>) => {
      setFilled(e.animationName.includes('autofill-start'));
    };

    return (
      <Input
        value={value || ''}
        onChange={handleChange}
        labelProps={{ ...labelProps, shrink }}
        inputProps={{
          ...inputProps,
          className: s.input,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onAnimationStart: handleAnimationStart,
        }}
        {...other}
        ref={ref}
      />
    );
  }
);
