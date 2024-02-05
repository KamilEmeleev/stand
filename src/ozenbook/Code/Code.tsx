import { FC } from 'react';

import { themeOzenDark, ThemeProvider } from '@ozen-ui/kit/ThemeProvider';
import { CodeBlock, vs2015 } from 'react-code-blocks';

import s from './Code.module.css';

type CodeProps = {
  code?: string;
  language?: string;
};

export const Code: FC<CodeProps> = ({ code, language = 'typescript' }) => {
  return (
    <ThemeProvider theme={themeOzenDark} className={s.code}>
      <CodeBlock text={code} language={language} theme={vs2015} />
    </ThemeProvider>
  );
};
