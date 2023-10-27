import { useEffect } from 'react';

import { Paper } from '@ozen-ui/kit/Paper';
import { useSnackbar } from '@ozen-ui/kit/Snackbar';
import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { useTimer } from '@ozen-ui/kit/useTimer';

import { Footer, Header, Main } from './components';
import s from './Content.module.css';

export const Content = () => {
  const { m } = useBreakpoints();
  const isMobile = !m;
  const { pushMessage } = useSnackbar();

  const { startTimer } = useTimer({
    startTime: 0,
    endTime: 2000,
    onTimerEnd: () => {
      pushMessage({
        title: 'Демо-стенд библиотеки компонентов Ozen-UI',
        status: 'success',
      });
    },
  });

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return (
    <Paper className={s.content} radius="s">
      <Header />
      <Main />
      {!isMobile && <Footer />}
    </Paper>
  );
};
