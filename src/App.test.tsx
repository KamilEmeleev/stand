import { screen, render } from '@testing-library/react';
import { test, expect } from 'vitest';

import App from './App.tsx';

test('first test', () => {
  render(<App />);

  expect(screen.getByText('Войдите в приложение')).toBeInTheDocument();
});
