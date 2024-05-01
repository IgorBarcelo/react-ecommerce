import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/Carrinho de compras/i);
  expect(headerText).toBeInTheDocument();
});

test('renders product list', () => {
  render(<App />);
  const productList = screen.getByTestId('product-list'); // Supondo que você tenha um atributo data-testid="product-list" na sua lista de produtos
  expect(productList).toBeInTheDocument();
});
