import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Route } from 'wouter';

import { useApp } from '../../../../AppContext.tsx';
import { navigation } from '../../../../helpers';
import { Footer } from '../Footer';
import { Page } from '../Page';

import s from './Main.module.css';

export const Main = () => {
  const { m } = useBreakpoints();
  const { setScrollContainerEl } = useApp();
  const isMobile = !m;

  return (
    <main ref={(el) => setScrollContainerEl?.(el)} className={s.main}>
      {Object.entries(navigation.routes).map(([key, props]) => {
        return props.link ? (
          <Route path={props.link} key={key}>
            <Page {...props} />
          </Route>
        ) : null;
      })}
      {!isMobile && <Footer />}
    </main>
  );
};
