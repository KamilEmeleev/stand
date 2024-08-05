import { Button } from '@ozen-ui/kit/ButtonNext';
import { useBoolean } from '@ozen-ui/kit/useBoolean';

export const Story = () => {
  const [loading, { on, off }] = useBoolean(false);

  const handleClick = () => {
    on();
    setTimeout(off, 1500);
  };

  return (
    <Button onClick={handleClick} loading={loading}>
      Отправить запрос
    </Button>
  );
};
