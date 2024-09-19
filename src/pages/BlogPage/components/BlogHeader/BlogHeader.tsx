import { FC, ReactNode } from 'react';

import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useLocation } from 'wouter';

import { type User } from '../../../../helpers';

import s from './BlogHeader.module.css';

export type BlogHeaderProps = {
  user?: User;
  renderActions?: () => ReactNode;
};

export const BlogHeader: FC<BlogHeaderProps> = ({
  user,
  renderActions: renderActionsProp,
}) => {
  const [, setLocation] = useLocation();

  const renderActionsDefault = () => {
    const writePost = () => {
      setLocation(`/blog/write-post`);
    };

    return <Button onClick={writePost}>Написать</Button>;
  };

  const renderActions = renderActionsProp || renderActionsDefault;

  return (
    <Card borderWidth="none">
      <Stack
        gap="l"
        align="center"
        justify="spaceBetween"
        className={s.writeArticle}
        fullWidth
      >
        <Typography variant="text-xl_1">Привет, {user?.name}!</Typography>
        {renderActions()}
      </Stack>
    </Card>
  );
};
