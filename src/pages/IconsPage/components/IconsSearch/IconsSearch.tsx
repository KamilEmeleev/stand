import {
  FC,
  useState,
  useRef,
  useMemo,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from 'react';

import { FilterIcon, SearchIcon } from '@ozen-ui/icons';
import { icons } from '@ozen-ui/icons/manifest.json';
import { isKey } from '@ozen-ui/kit/__inner__/esm/utils/isKey';
import { Button } from '@ozen-ui/kit/Button';
import { Checkbox } from '@ozen-ui/kit/Checkbox';
import {
  DataList,
  DataListOption,
  type DataListSelected,
  type DataListOnSelect,
} from '@ozen-ui/kit/DataList';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { Input } from '@ozen-ui/kit/Input';
import { ListItemIcon, ListItemText } from '@ozen-ui/kit/List';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import sortBy from 'lodash.sortby';

import { IconsProps } from '../../IconsPage.tsx';

import s from './IconSearch.module.css';

export type IconsSearchProps = {
  onFilterIcons: (arg: IconsProps) => void;
};

const types = ['Актуальные', 'Устаревшие'];

export const IconsSearch: FC<IconsSearchProps> = ({ onFilterIcons }) => {
  const { m } = useBreakpoints();
  const isMobile = !m;
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [open, { on, off, toggle }] = useBoolean();

  const [type, setType] = useState<DataListSelected<true>>(types);
  const [searchString, setSearchString] = useState<string>('');

  const filteredIcons = useMemo(
    () =>
      sortBy(icons as IconsProps, ['deprecated', 'colored', 'name']).filter(
        ({ componentName, deprecated }) =>
          componentName.toLowerCase().includes(searchString.toLowerCase()) &&
          ((deprecated && type?.includes('Устаревшие')) ||
            (!deprecated && type?.includes('Актуальные')))
      ),
    [searchString, type]
  );

  useEffect(() => {
    onFilterIcons(filteredIcons);
  }, [filteredIcons, onFilterIcons]);

  const onSelect: DataListOnSelect<true> = (_, { value }) => {
    setType(value);
  };

  const handleOnKeyDownFilter = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (isKey(e, 'ArrowUp') || (isKey(e, 'ArrowDown') && !open)) {
      e.preventDefault();
      on();
    }
  };

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <Grid gap="m" align="center" className={s.search}>
      <GridItem col={{ xs: 12, m: 4 }}>
        <Input
          label="Найти иконку"
          value={searchString}
          renderLeft={SearchIcon}
          onChange={handleOnChangeInput}
          fullWidth
        />
      </GridItem>
      {!isMobile && (
        <GridItem col={{ xs: 4, m: 8 }} style={{ justifySelf: 'end' }}>
          <Stack gap="m" align="center" justify="center">
            <Button
              variant="ghost"
              ref={anchorRef}
              color="secondary"
              onClick={toggle}
              iconRight={FilterIcon}
              onKeyDown={handleOnKeyDownFilter}
              fullWidth
            >
              Фильтр
            </Button>
            <DataList
              open={open}
              onClose={off}
              selected={type}
              onSelect={onSelect}
              className={s.dataList}
              anchorRef={anchorRef}
              placement="bottom-end"
              multiple
            >
              {types.map((value) => {
                const selected = type?.includes(value);

                return (
                  <DataListOption key={value} value={value}>
                    <ListItemIcon>
                      <Checkbox tabIndex={-1} checked={selected} />
                    </ListItemIcon>
                    <ListItemText primary={value} />
                  </DataListOption>
                );
              })}
            </DataList>
          </Stack>
        </GridItem>
      )}
    </Grid>
  );
};
