import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Typography } from '@ozen-ui/kit/Typography';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';

export const LoginPageHeader = () => {
  const { s } = useBreakpoints();
  const isMobile = !s;

  const variant = isMobile ? 'text-2xl_1' : 'text-3xl_1';

  return (
    <div>
      <Typography
        align="left"
        variant={variant}
        className={spacing({ mb: 's' })}
      >
        Привет! 👋
      </Typography>
      <Typography variant={variant} align="left">
        Войдите в приложение
      </Typography>
    </div>
  );
};
