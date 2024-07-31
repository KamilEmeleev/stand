import type { FC, HTMLAttributes, ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

import s from './mdx.module.css';

const components = {
  em: (props: HTMLAttributes<HTMLElement>) => <i {...props} />,
};

export type MDXProps = {
  children: ReactNode;
};

export const MDX: FC<MDXProps> = ({ children }) => {
  return (
    <div className={s.doc}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
};
