import { useState, FC, ChangeEvent } from 'react';

import * as iconComponents from '@ozen-ui/icons';
import { CheckIcon, type IconSize } from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import {
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Drawer,
} from '@ozen-ui/kit/Drawer';
import { FormTitle } from '@ozen-ui/kit/FormTitle';
import { Indicator } from '@ozen-ui/kit/Indicator';
import { Radio } from '@ozen-ui/kit/Radio';
import { RadioGroup } from '@ozen-ui/kit/RadioGroup';
import {
  Select,
  Option,
  OptionItemIcon,
  OptionItemText,
} from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import { themeHelper } from '@ozen-ui/kit/ThemeProvider';

import { Code, ShowCase } from '../../../../ozenbook';
import { IconProps } from '../../IconsPage.tsx';

import { filterColor, code } from './utils.ts';

export type IconDetailDrawerProps = {
  open?: boolean;
  icon?: IconProps;
  onClose?: () => void;
};

const INITIAL_COLOR = '--color-content-primary';
const INITIAL_SIZE = 'm';

export const IconDetailDrawer: FC<IconDetailDrawerProps> = ({
  open,
  icon,
  onClose,
}) => {
  const contentColor = filterColor(themeHelper.color, '--color-content');

  const [size, setSize] = useState<IconSize>(INITIAL_SIZE);

  const [color, setColor] =
    useState<(typeof themeHelper.color)[number]>(INITIAL_COLOR);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value as IconSize);
  };

  const {
    componentName: iconName,
    size: iconSize,
    deprecated,
    colored,
  } = icon || {};

  const reset = () => {
    onClose?.();
    setSize(INITIAL_SIZE);
    setColor(INITIAL_COLOR);
  };

  const isMultiSize = Array.isArray(iconSize);

  const Icon = iconName
    ? // eslint-disable-next-line import/namespace
      iconComponents[iconName as keyof typeof iconComponents]
    : undefined;

  return (
    <Drawer open={open} size="s" onClose={onClose} onExited={reset}>
      <DrawerHeader>
        <Stack direction="column" gap="s" fullWidth>
          <DrawerTitle>{iconName}</DrawerTitle>
          {deprecated && (
            <Badge as="span" content="Deprecated" color="errorLight" />
          )}
        </Stack>
      </DrawerHeader>
      <DrawerBody>
        <Stack direction="column" gap="xl" fullWidth>
          <ShowCase>
            {Icon && <Icon size={size} color={`var(${color})`} />}
          </ShowCase>
          {isMultiSize && (
            <RadioGroup
              title="Размер:"
              name="iconSize"
              direction="row"
              value={size}
              onChange={handleChange}
            >
              <Radio label="s" value="s" />
              <Radio label="m" value="m" />
            </RadioGroup>
          )}
          {!colored && (
            <div>
              <FormTitle>Цвет иконки:</FormTitle>
              <Select
                label="Цвет"
                value={color}
                renderLeft={
                  <Indicator style={{ backgroundColor: `var(${color})` }} />
                }
                onChange={(value) =>
                  value && setColor(value as (typeof themeHelper.color)[number])
                }
                fullWidth
              >
                {contentColor.map((key) => {
                  const selected = color === key;

                  return (
                    <Option
                      key={key}
                      label={key}
                      value={key}
                      selected={selected}
                    >
                      <OptionItemIcon>
                        <Indicator style={{ backgroundColor: `var(${key})` }} />
                      </OptionItemIcon>
                      <OptionItemText primary={key} />
                      {selected && (
                        <OptionItemIcon>
                          <CheckIcon />
                        </OptionItemIcon>
                      )}
                    </Option>
                  );
                })}
              </Select>
            </div>
          )}
          <div>
            <FormTitle>Применение:</FormTitle>
            <Code
              code={code({
                name: iconName || '',
                colored: !!colored,
                multiSize: isMultiSize,
                size,
                color,
              })}
            />
          </div>
        </Stack>
      </DrawerBody>
    </Drawer>
  );
};
