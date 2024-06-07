import { useMemo, useState } from 'react';

import { icons } from '@ozen-ui/icons/manifest.json';
import { Stack } from '@ozen-ui/kit/Stack';
import sortBy from 'lodash.sortby';

import { IconsList, IconsSearch } from './components';

export type IconsFilter = {
  name?: string;
  category?: string;
};

export const IconsPage = () => {
  const [filter, setFilter] = useState<IconsFilter>({ name: '', category: '' });

  const filteredIcons = useMemo(
    () =>
      sortBy(icons, ['deprecated', 'colored', 'name']).filter(
        ({ componentName, category }) =>
          componentName
            .toLowerCase()
            .includes((filter.name || '').toLowerCase()) &&
          (category === filter.category || !filter.category)
      ),
    [filter]
  );

  return (
    <Stack direction="column" gap={{ xs: 'l', m: '2xl' }}>
      <IconsSearch filter={filter} setFilter={setFilter} />
      <IconsList icons={filteredIcons} />
    </Stack>
  );
};
