import { ChatInfoIcon, LinkIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Divider } from '@ozen-ui/kit/Divider';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Link } from 'wouter';

export const HelpCenterWidget = () => {
  return (
    <Stack
      direction="column"
      align="start"
      divider={<Divider color="secondary" className={spacing({ my: 'l' })} />}
      fullWidth
    >
      <Stack direction="column">
        <Typography
          color="infoDark"
          as={Stack}
          gap="m"
          className={spacing({ mb: 'xl' })}
        >
          <ChatInfoIcon />
          <span>Центр помощи</span>
        </Typography>
        <Typography variant="text-l_1" className={spacing({ mb: 'm' })}>
          Нужна помощь, чтобы разобраться во всем?
        </Typography>
        <Typography color="tertiary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Link to="/help-center">
        <Button variant="function" iconRight={<LinkIcon size="s" />}>
          Искать помощь
        </Button>
      </Link>
    </Stack>
  );
};
