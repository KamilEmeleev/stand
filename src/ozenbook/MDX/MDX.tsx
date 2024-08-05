import type { ComponentProps, FC, HTMLAttributes, ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';
import { dedent } from 'ts-dedent';

import { Code } from '../Code';

import s from './mdx.module.css';

const components = {
  em: (props: HTMLAttributes<HTMLElement>) => <i {...props} />,
  h1: (props: HTMLAttributes<HTMLElement>) => {
    return <h1 {...props} id={props.children?.toString()} />;
  },
  h2: (props: HTMLAttributes<HTMLElement>) => {
    return <h2 {...props} id={props.children?.toString()} />;
  },
  h3: (props: HTMLAttributes<HTMLElement>) => {
    return <h2 {...props} id={props.children?.toString()} />;
  },
  code: (props: HTMLAttributes<HTMLElement>) => {
    return props.className ? (
      <Code code={dedent(props.children as string)} />
    ) : (
      <code {...props} />
    );
  },
};

export type MDXProps = {
  children: ReactNode;
} & ComponentProps<'div'>;

export const MDX: FC<MDXProps> = ({ children, className, ...other }) => {
  return (
    <div className={clsx(s.doc, className)} {...other}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
};
