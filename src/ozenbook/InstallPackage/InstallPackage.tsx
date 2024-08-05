import React, { useState } from 'react';

import { Divider } from '@ozen-ui/kit/Divider';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tab, Tabs, type TabsProps } from '@ozen-ui/kit/Tabs';
import { Typography } from '@ozen-ui/kit/Typography';
import { dedent } from 'ts-dedent';

import { Code } from '../Code';

import { Npm, Pnpm, Yarn } from './RegistryLogos';

const cmdLines = {
  yarn: 'yarn add',
  npm: 'npm install --save',
  pnpm: 'pnpm add',
};

type InstallPackageProps = {
  title?: string;
  name: string;
};

export const InstallPackage: React.FC<InstallPackageProps> = ({
  name,
  title,
}) => {
  const [value, setValue] = useState<keyof typeof cmdLines>('pnpm');

  const handleOnChange: TabsProps['onChange'] = (_, value) => {
    setValue(value as keyof typeof cmdLines);
  };

  return (
    <div>
      {title && (
        <Typography className={spacing({ mb: 's' })}>{title}</Typography>
      )}
      <Stack direction="column" gap="xl" fullWidth>
        <div>
          <Tabs value={value} onChange={handleOnChange}>
            <Tab iconLeft={Pnpm} label="pnpm" value="pnpm" />
            <Tab iconLeft={Yarn} label="yarn" value="yarn" />
            <Tab iconLeft={Npm} label="npm" value="npm" />
          </Tabs>
          <Divider
            style={{
              position: 'relative',
              top: -1,
            }}
          />
        </div>
        <Code
          language="shell"
          code={dedent`
            # terminal
            ${cmdLines[value]} ${name}
          `}
        />
      </Stack>
    </div>
  );
};
