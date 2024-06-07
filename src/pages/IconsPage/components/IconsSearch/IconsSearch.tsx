import type { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { SearchIcon } from '@ozen-ui/icons';
import { icons } from '@ozen-ui/icons/manifest.json';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Input } from '@ozen-ui/kit/Input';
import { Select, Option } from '@ozen-ui/kit/Select';
import type { SelectProps } from '@ozen-ui/kit/Select';

import { IconsFilter } from '../../IconsPage.tsx';

import s from './IconSearch.module.css';

export type IconsSearchProps = {
  setFilter: Dispatch<SetStateAction<IconsFilter>>;
  filter: IconsFilter;
};

export const IconsSearch: FC<IconsSearchProps> = ({ setFilter, filter }) => {
  const category = [...new Set(icons.map(({ category }) => category))];

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleChangeSelect: SelectProps['onChange'] = (value) =>
    setFilter((prevState) => ({
      ...prevState,
      category: value as IconsFilter['category'],
    }));

  return (
    <Grid gap="m" align="center" className={s.search}>
      <GridItem col={{ xs: 12, m: 8 }}>
        <Input
          value={filter.name}
          label="Найти иконку"
          renderLeft={SearchIcon}
          onChange={handleChangeInput}
          fullWidth
        />
      </GridItem>
      <GridItem col={{ xs: 12, m: 4 }}>
        <Select
          value={filter.category}
          label="Категория иконок"
          onChange={handleChangeSelect}
          fullWidth
        >
          <Option value="">Все категории</Option>
          {category.map((category) => (
            <Option value={category} key={category}>
              {category}
            </Option>
          ))}
        </Select>
      </GridItem>
    </Grid>
  );
};
