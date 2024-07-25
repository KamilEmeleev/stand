import { useState, useMemo, MouseEvent } from 'react';

import { SearchIcon } from '@ozen-ui/icons';
import {
  Autocomplete,
  type AutocompleteProps,
} from '@ozen-ui/kit/AutocompleteNext';
import { ListItem, ListItemText } from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/TagNext';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useLocation } from 'wouter';

import { hints } from '../../../../helpers/help-center.ts';

import s from './HelpCenterSearchPanel.module.css';

const TAGS = [
  'Платформа',
  'Дисковое пространство',
  'Получить справку или выписку',
  'Аккаунт',
  'Награды',
  'Дизайн-система',
];

export const HelpCenterSearchPanel = () => {
  const [, setLocation] = useLocation();
  const [open, setOpen] = useBoolean(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [value, setValue] = useState<(typeof hints)[0] | null>(null);

  const filteredHints = useMemo(
    () =>
      inputValue
        ? hints.filter(({ label, category }) => {
            return (
              label.toLowerCase().includes(inputValue.toLowerCase()) ||
              category.toLowerCase().includes(inputValue.toLowerCase())
            );
          })
        : [],
    [inputValue]
  );

  const handleOnInputChange: AutocompleteProps<
    (typeof hints)[0]
  >['onInputChange'] = (_, val) => {
    setInputValue(val);
  };

  const handleChange: AutocompleteProps<(typeof hints)[0]>['onChange'] = (
    _,
    option
  ) => {
    setValue(option);
    if (option?.id) setLocation(`/help-center/${option.id}`);
  };

  const renderOption: AutocompleteProps<(typeof hints)[0]>['renderOption'] = ({
    props,
    option,
  }) => (
    <ListItem {...props}>
      <ListItemText primary={option.label} secondary={option.category} />
    </ListItem>
  );

  const searchFunction: AutocompleteProps<
    (typeof hints)[0]
  >['searchFunction'] = (options) => options;

  const handleClickOnTag = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen.on();
    setInputValue(e.currentTarget.value);
  };

  return (
    <Stack direction="column" gap="xl">
      <Autocomplete
        open={open}
        value={value}
        autoFocus={open}
        onOpen={setOpen.on}
        onClose={setOpen.off}
        options={filteredHints}
        renderLeft={SearchIcon}
        onChange={handleChange}
        inputValue={inputValue}
        renderOption={renderOption}
        searchFunction={searchFunction}
        onInputChange={handleOnInputChange}
        className={s.search}
        placeholder="Задайте свой вопрос"
        dataListProps={{ style: { maxHeight: 308 } }}
        fullWidth
        allowCustomValue
        disableShowChevron
        disableShowEmptyOptionsList
      />
      <Stack gap="m" align="center" justify="center" wrap fullWidth>
        {TAGS.map((tag) => (
          <Tag
            size="s"
            key={tag}
            as="button"
            label={tag}
            value={tag}
            color="info"
            onClick={handleClickOnTag}
            interactive
          />
        ))}
      </Stack>
    </Stack>
  );
};
