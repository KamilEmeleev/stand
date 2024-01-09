import { ChevronLeftIcon } from '@ozen-ui/icons';
import { Card } from '@ozen-ui/kit/Card';
import { Container } from '@ozen-ui/kit/Container';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useLocation, useParams } from 'wouter';

import { hints } from '../../helpers/help-center.ts';

export const HelpCenterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { m } = useBreakpoints();
  const [, setLocation] = useLocation();
  const isMobile = !m;

  const title = hints.find((hint) => hint.id === +id)?.label;

  return (
    <Container maxWidth="m" position="center">
      <Stack
        align="center"
        direction="column"
        gap={{ xs: '2xl', s: '4xl' }}
        className={spacing({ py: isMobile ? 's' : '2xl' })}
        fullWidth
      >
        <Typography
          as="h1"
          align="center"
          variant={isMobile ? 'heading-xl' : 'heading-2xl'}
        >
          {title}
        </Typography>
        <Card
          as={Stack}
          size="l"
          direction="column"
          borderWidth="none"
          gap="2xl"
          fullWidth
        >
          <Stack gap="s" align="center">
            <IconButton
              icon={ChevronLeftIcon}
              variant="function"
              onClick={() => setLocation('/help-center')}
            />
            <Typography as="h1" variant="text-l_1">
              Назад
            </Typography>
          </Stack>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
            atque, eius error et excepturi in incidunt ipsa iure magnam nulla
            odit, placeat quia reiciendis repellat repellendus sequi! Aspernatur
            consequatur corporis ea nostrum, odio quibusdam quisquam soluta
            tenetur totam? Inventore laboriosam, sunt. Aperiam, architecto at
            autem deserunt eligendi enim impedit incidunt magnam optio possimus
            quae repudiandae suscipit! Ab accusantium adipisci aperiam autem
            commodi dicta dolore doloremque eaque eos error eum, eveniet, ex
            excepturi exercitationem expedita explicabo facere fuga fugit
            laborum libero magnam maxime mollitia natus neque nostrum nulla
            omnis quae quia quos ratione repellat saepe sint suscipit temporibus
            vel veniam voluptatum. Alias aliquam autem consequatur distinctio
            error in, incidunt molestiae numquam officia, porro possimus
            quibusdam repellat reprehenderit vitae voluptas. Alias corporis, eum
            explicabo id iusto modi necessitatibus officia officiis quae quasi
            quisquam quos sequi sint. Aliquam cumque deleniti distinctio
            doloremque ducimus et exercitationem inventore, iusto libero minima
            nam nisi officia, perferendis, quam quia quibusdam quisquam
            repudiandae sequi sit tempora totam unde voluptas voluptatem. Ab
            consequatur culpa dignissimos eum, labore laborum minus molestias
            nam necessitatibus nesciunt nostrum obcaecati officia possimus quis
            quos repellat similique ullam voluptate voluptates voluptatum.
            Adipisci deserunt perspiciatis quasi repudiandae sed tempore
            voluptas. Consequuntur dolor laudantium quod voluptatem?
          </Typography>
        </Card>
      </Stack>
    </Container>
  );
};
