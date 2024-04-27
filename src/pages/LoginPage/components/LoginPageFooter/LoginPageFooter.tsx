import { SectionMessage } from '@ozen-ui/kit/SectionMessage';
import { Typography } from '@ozen-ui/kit/Typography';

export const LoginPageFooter = () => {
  return (
    <SectionMessage>
      Для входа в приложение воспользуйтесь гостевым логином и паролем:{' '}
      <Typography variant="text-m_1" as="span">
        guest
      </Typography>{' '}
      и{' '}
      <Typography variant="text-m_1" as="span">
        guest
      </Typography>
    </SectionMessage>
  );
};
