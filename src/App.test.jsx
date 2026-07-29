import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pipeline heading', () => {
  render(<App />);
  expect(screen.getByText(/Pipeline Frontend/i)).toBeInTheDocument();
});
