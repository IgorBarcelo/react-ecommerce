import React, { useState }  from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import { QueryClient, QueryClientProvider } from 'react-query';
import Baseboard from './Baseboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCart';

const queryClient = new QueryClient();

const App: React.FC = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Supondo que você tenha uma lista de itens no carrinho

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header toggleCart={toggleCart} cartItems={cartItems} />
        {/* <ShoppingCart isOpen={isCartOpen} cartItems={cartItems} toggleCart={toggleCart} /> */}
        <ProductList />
        <Baseboard />
      </div>
    </QueryClientProvider>
  );
};

export default App;