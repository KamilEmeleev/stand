import { useBreakpoints } from '@ozen-ui/kit/useBreakpoints';
import { Route } from 'wouter';

import { useApp } from '../../../../AppContext.tsx';
import { navigation } from '../../../../helpers';
import { Footer } from '../Footer';
import { Page } from '../Page';

export const Main = () => {
  const { m } = useBreakpoints();
  const { setScrollContainerEl } = useApp();
  const isMobile = !m;

  return (
    <main ref={(el) => setScrollContainerEl?.(el)}>
      {Object.values(navigation.routes).map((props, index) => {
        return (
          <Route path={props.link} key={index}>
            <Page {...props} />
          </Route>
        );
      })}
      {!isMobile && <Footer />}
    </main>
  );
};
