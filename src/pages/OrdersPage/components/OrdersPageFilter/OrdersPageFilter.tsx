import { FC, useState } from 'react';

import { CrossIcon, SearchIcon, SortDefaultIcon } from '@ozen-ui/icons';
import { Divider } from '@ozen-ui/kit/Divider';
import { Grid, GridItem } from '@ozen-ui/kit/Grid';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { Input } from '@ozen-ui/kit/Input';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Option, Select, type SelectProps } from '@ozen-ui/kit/Select';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tab, Tabs } from '@ozen-ui/kit/Tabs';
import { Tag } from '@ozen-ui/kit/Tag';
import clsx from 'clsx';

import { OrdersFilter } from '../../OrdersPage.tsx';

import s from './OrdersPageFilter.module.css';

export type OrdersPageFilterProps = {
  filter: OrdersFilter;
  setFilter: (params: OrdersFilter) => void;
};

export const OrdersPageFilter: FC<OrdersPageFilterProps> = ({
  filter,
  setFilter,
}) => {
  const [value, setValue] = useState(0);

  const onChange: SelectProps['onChange'] = (value) => {
    setFilter({ date: value as OrdersFilter['date'] });
  };

  return (
    <Stack gap="xl" direction="column" fullWidth>
      <Stack direction="column">
        <Tabs
          value={value}
          onChange={(_, value) => setValue(value as number)}
          className={clsx(spacing({ px: 'xl', pb: 0, pt: 's' }), s.tabs)}
        >
          <Tab
            iconRight={() => <Tag label="10" variant="neutral" size="xs" />}
            onClick={() => setFilter({ status: undefined })}
            label="Все"
          />
          <Tab
            iconRight={() => <Tag label="6" variant="success" size="xs" />}
            label="Оплаченные"
            onClick={() => setFilter({ status: 'payed' })}
          />
          <Tab
            iconRight={() => <Tag label="3" variant="error" size="xs" />}
            label="Отмененные"
            onClick={() => setFilter({ status: 'declined' })}
          />
          <Tab
            iconRight={() => <Tag label="1" variant="warning" size="xs" />}
            label="В обработке"
            onClick={() => setFilter({ status: 'inProgress' })}
          />
        </Tabs>
        <Divider color="secondary" className={s.divider} />
      </Stack>
      <Grid cols={4} gap="l" className={spacing({ px: 'xl' })}>
        <GridItem col={{ xs: 4, s: 3 }}>
          <Input
            value={filter.value}
            renderLeft={SearchIcon}
            onChange={(event) => {
              setFilter({ value: event.target.value });
            }}
            renderRight={() =>
              filter.value ? (
                <IconButton
                  icon={CrossIcon}
                  tabIndex={-1}
                  variant="function"
                  onClick={() => {
                    setFilter({ value: '' });
                  }}
                />
              ) : null
            }
            label="Поиск по номеру заказа"
            className={s.input}
            fullWidth
          />
        </GridItem>
        <GridItem col={{ xs: 4, s: 1 }}>
          <Select
            label="Сортировать"
            className={s.select}
            value={filter.date}
            onChange={onChange}
            renderLeft={SortDefaultIcon}
            fullWidth
          >
            <Option value="newest" label="Сначала новые" />
            <Option value="oldest" label="Сначала старые" />
          </Select>
        </GridItem>
      </Grid>
      <Divider color="secondary" />
    </Stack>
  );
};
