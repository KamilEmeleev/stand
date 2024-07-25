import { Avatar } from '@ozen-ui/kit/Avatar';
import { ListItem, ListItemIcon, ListItemText } from '@ozen-ui/kit/List';

import { user } from '../../helpers';
import { AccentList } from '../AccentList';

import s from './Profile.module.css';

export const Profile = () => {
  return (
    <AccentList>
      <ListItem disableGutters>
        <ListItemIcon>
          <Avatar
            size="xs"
            name={user.fullName}
            src={user.avatar.url}
            indicatorProps={{ className: s.indicator }}
            online
          />
        </ListItemIcon>
        <ListItemText
          primary={user.fullName}
          secondary="Online"
          primaryTypographyProps={{
            noWrap: true,
            color: 'accentPrimary',
          }}
          secondaryTypographyProps={{
            color: 'success',
          }}
        />
      </ListItem>
    </AccentList>
  );
};
