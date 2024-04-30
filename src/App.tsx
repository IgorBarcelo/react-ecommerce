import React, { useState }  from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import { QueryClient, QueryClientProvider } from 'react-query';
import Baseboard from './Baseboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCart';
import type { Product } from './types';

const queryClient = new QueryClient();

const App: React.FC = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]); // Supondo que você tenha uma lista de itens no carrinho

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (productId: number): Product[] => {
    // Filtra os itens do carrinho removendo o item com o ID correspondente
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    // Atualiza o estado do carrinho com o novo array de produtos
    setCartItems(updatedCartItems);
    // Retorna o novo array de produtos
    return updatedCartItems;
  };

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity }; // Atualiza a quantidade do item
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Função para calcular o total com base nos itens do carrinho
  const total = cartItems.reduce((acc, item) => {
    // Verifica se a quantidade é zero e substitui por 1
    const quantity = item.quantity === undefined ? 1 : item.quantity;
    // Adiciona o preço multiplicado pela quantidade ao acumulador
    return acc + (item.price * quantity);
  }, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <ShoppingCart isOpen={isCartOpen} 
                      cartItems={cartItems} 
                      toggleCart={toggleCart}  
                      removeFromCart={removeFromCart} 
                      updateCartItemQuantity={updateCartItemQuantity}
                      total={total}
        />
        <ProductList addToCart={addToCart} />
        <Baseboard />
      </div>
    </QueryClientProvider>
  );
};

export default App;