import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renderiza o título principal', () => {
    render(<App />);
    expect(screen.getByText(/Pipeline Frontend/i)).toBeInTheDocument();
  });

  it('renderiza o componente carregado via lazy loading', async () => {
    render(<App />);
    const lazyElement = await screen.findByText(/Módulo Carregado Dinamicamente/i);
    expect(lazyElement).toBeInTheDocument();
  });
});