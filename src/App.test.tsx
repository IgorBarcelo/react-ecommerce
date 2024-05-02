import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const headerText = screen.getByText(/MKS Sistemas/i);
  expect(headerText).toBeInTheDocument();
});

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/Carrinho de compras/i);
  expect(headerText).toBeInTheDocument();
});