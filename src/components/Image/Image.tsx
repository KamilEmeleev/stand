import { ComponentProps, FC, SyntheticEvent } from 'react';

import { Skeleton } from '@ozen-ui/kit/Skeleton';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

export type ImageProps = ComponentProps<'img'>;

export const Image: FC<ImageProps> = ({
  className,
  src,
  style,
  onLoad: onLoadProp,
  width,
  alt,
  height,
  ...other
}) => {
  const [loaded, { on }] = useBoolean(false);

  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    onLoadProp?.(e);
    on();
  };

  return (
    <>
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        style={{ display: loaded ? 'none' : 'inline' }}
        className={className}
      />
      <img
        {...other}
        style={{ display: loaded ? 'inline' : 'none', ...style }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={onLoad}
      />
    </>
  );
};
