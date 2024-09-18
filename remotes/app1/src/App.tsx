import { themeOzenDefault, ThemeProvider } from '@ozen-ui/kit/ThemeProvider';

import { AppContent } from '../components';

function App() {
  return (
    <ThemeProvider theme={themeOzenDefault} className="App">
      <h1>Remote Application</h1>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
