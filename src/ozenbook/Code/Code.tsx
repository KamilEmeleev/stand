import { FC } from 'react';

import { themeOzenDark, ThemeProvider } from '@ozen-ui/kit/ThemeProvider';
import clsx from 'clsx';
import { CodeBlock, vs2015 } from 'react-code-blocks';

import s from './Code.module.css';

type CodeProps = {
  code?: string;
  language?: string;
};

export const Code: FC<CodeProps> = ({ code, language = 'typescript' }) => {
  return (
    <ThemeProvider theme={themeOzenDark} className={clsx(s.code, 'unstyled')}>
      <CodeBlock text={code} language={language} theme={vs2015} />
    </ThemeProvider>
  );
};
