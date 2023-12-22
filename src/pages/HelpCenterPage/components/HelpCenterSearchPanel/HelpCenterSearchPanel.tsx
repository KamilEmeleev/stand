import { useState, useMemo } from 'react';

import { SearchIcon } from '@ozen-ui/icons';
import {
  Autocomplete,
  type AutocompleteProps,
} from '@ozen-ui/kit/Autocomplete';
import { DataListOption } from '@ozen-ui/kit/DataList';
import { ListItemText } from '@ozen-ui/kit/List';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tag } from '@ozen-ui/kit/Tag';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useLocation } from 'wouter';

import { hints } from '../../../../helpers/help-center.ts';

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
    // if (option?.id)
    //   setTimeout(() => {
    //     setLocation('/help-center/details');
    //   }, 11500);
  };

  const renderOption: AutocompleteProps<(typeof hints)[0]>['renderOption'] = ({
    option,
  }) => (
    <DataListOption key={option.id} value={option.id}>
      <ListItemText primary={option.label} secondary={option.category} />
    </DataListOption>
  );

  const searchFunction: AutocompleteProps<
    (typeof hints)[0]
  >['searchFunction'] = (options) => options;

  return (
    <Stack direction="column" className={spacing({ p: '2xl' })} gap="xl">
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
        onInputChange={handleOnInputChange}
        searchFunction={searchFunction}
        placeholder="Найти ответ на вопрос…"
        dataListProps={{ style: { maxHeight: 340 } }}
        fullWidth
        allowCustomValue
        disableShowChevron
        disableShowEmptyOptionsList
      />
      <Stack gap="m" align="center" justify="center" wrap fullWidth>
        <Tag
          label="Аккаунт"
          value="Аккаунт"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
        <Tag
          label="Награды"
          value="Награды"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
        <Tag
          label="Дизайн-система"
          value="Дизайн-система"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
        <Tag
          label="Получить справку или выписку"
          value="Получить справку или выписку"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
        <Tag
          label="Платформа"
          value="Платформа"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
        <Tag
          label="Дисковое пространство"
          value="Дисковое пространство"
          variant="info"
          as="button"
          onClick={(e) => {
            setOpen.on();
            setInputValue(e.currentTarget.value);
          }}
        />
      </Stack>
    </Stack>
  );
};
