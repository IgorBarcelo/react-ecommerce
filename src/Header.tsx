import React, { useState } from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import type { Product } from './types';

interface HeaderProps {
  toggleCart: () => void;
  cartItems: Product[];
}

// Estilos para o cabeçalho
const HeaderWrapper = styled.header`
  background-color: #0F52BA; /* Cor de fundo do cabeçalho */
  color: #FFFFFF; /* Cor do texto do cabeçalho */
  width: flex;
  height: 101px;
  //padding: 20px; /* Espaçamento interno do cabeçalho */
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  `;

const HeaderText = styled.h1`
  font-size: 40px; /* Tamanho da fonte do título */
  margin-top: 28px;
  margin-left: 65px; /* Remover margens padrão */
  text-align: left; /* Alinhamento do texto no centro */
  font-family:'Montserrat', sans-serif;
  display: flex;
  `;

const SubHeaderText = styled.h2`
  font-size: 18px; /* Tamanho da fonte do subtítulo */
  //display: flex;
  margin-top: 19px;
  padding-left: 8px;
  //margin: 0; /* Remover margens padrão */
  `;

const Header: React.FC<HeaderProps> = ({ toggleCart, cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // const toggleCartHandler = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  return (
    <HeaderWrapper>
      <HeaderText>MKS <SubHeaderText>Sistemas</SubHeaderText></HeaderText>
      {/* <ShoppingCart  isOpen={isCartOpen} toggleCart={toggleCart} cartItems={cartItems} /> */}
    </HeaderWrapper>
  );
};

export default Header;