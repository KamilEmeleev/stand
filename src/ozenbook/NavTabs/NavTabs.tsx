import { Divider } from '@ozen-ui/kit/Divider';
import { Stack } from '@ozen-ui/kit/Stack';
import { Tabs, Tab } from '@ozen-ui/kit/Tabs';

export const NavTabs = () => {
  return (
    <Stack direction="column" fullWidth>
      <Tabs value="Описание">
        <Tab label="Описание" value="Описание" />
        <Tab label="Разработчику" value="Разработчику" disabled />
      </Tabs>
      <Divider
        style={{
          position: 'relative',
          top: -1,
        }}
      />
    </Stack>
  );
};
