import React, { useState }  from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import { QueryClient, QueryClientProvider } from 'react-query';
import Baseboard from './Baseboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCart';
import type { Product } from './types';
import ListCar from './ListCar';

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
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header toggleCart={toggleCart} cartItems={cartItems} />
        <ShoppingCart isOpen={isCartOpen} 
                      cartItems={cartItems} 
                      toggleCart={toggleCart}  
                      removeFromCart={removeFromCart} 
                      updateCartItemQuantity={updateCartItemQuantity}
                      total={calculateTotal()}
        />
        <ProductList addToCart={addToCart} />
        {/* <ListCar items={cartItems} removeFromCart={removeFromCart} /> */}
        <Baseboard />
      </div>
    </QueryClientProvider>
  );
};

export default App;