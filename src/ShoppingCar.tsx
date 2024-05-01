import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import ListCar from './ListCar';
import type { Product } from './types';

interface ShoppingCartProps {
  isOpen: boolean;
  cartItems: Product[];
  toggleCar: () => void;
  removeFromCart: (productId: number) => Product[];
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  total: number;
};

const CartContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 486px;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100; /* Valor alto para garantir que fique sobreposto */
  height: 100vh; /* 100% da altura da janela do navegador */
  right: ${({ isOpen }) => (isOpen ? '0' : '-486px')}; /* Esconde a div fora da tela */
  height: 100vh;
  background-color: #0F52BA;
  transition: right 0.3s ease; /* Adiciona uma transição suave */
  box-shadow: -2px 0px 5px 0px rgba(0,0,0,0.5); /* Adiciona uma sombra */

  @media only screen and (max-width: 768px) {
        width: 330px; /* Ocupa toda a largura disponível */
        right: ${({ isOpen }) => (isOpen ? '0' : '-330px')}; /* Esconde a div fora da tela */
        overflow-y: auto; /* Adiciona uma barra de rolagem vertical se necessário */
        margin: 0 auto; /* Centralizar na tela */
  }
`;

const ButtonCar = styled.button`
  position: absolute;
  display: right;
  width: 90px;
  height: 45px;
  top: 29px;
  right: 65px;
  border-radius: 8px;
  background-color: #FFFFFF;
  text-align: left;
  border: 0;
  font-size: 20px;

    &:hover {
    background-color: #000000; /* Nova cor quando o mouse está sobre o botão */
    color: white;
  }

  @media only screen and (max-width: 768px) {
    width: 52px;
    height: 26px;
    right: 25px;
    top: 10px;
  }
`;

const CarIcon = styled.img`
  width: 19.01px;
  height: 18px;
  margin-left: 15px;
  margin-right: 13px;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    margin-left: 5px;
    margin-top: -12px;
    width: 11px;
    height: 10px;
  }
`;

const Qt = styled.p`
  font-weight: bold;
  margin-left: 50px;
  margin-top: -24px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 25px;
    margin-top: -27px;
  }
`;

const TitleCar = styled.h1`
  flex-wrap: wrap;
  margin-top: 36px;
  margin-left: 36px;
  width: 180px;
  font-size: 27px;
  font-weight: bold;
  text-align: left;
  color: white;
`;

const ButtonCloseCar = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 50%;
  color: white;
  padding-bottom: 3px;
  line-height: 0px;
  border: 0;
  font-size: 28px;
`;

const BackListCar = styled.div`
  padding-left: 10px;
  width: 100%;
  height: 920px;
  margin-left: 36px;
  justify-content: right;
  margin: 40px;
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical se necessário */

  @media only screen and (max-width: 768px) {
    height: 900px;
    width: 100vw;
    overflow-y: auto; /* Adiciona uma barra de rolagem vertical se necessário */
  }
`;

const Total = styled.p`
  position: relative;
  font-size: 28px;
  left: 50px;
  top: 50px;
  //margin-left: 36px;
  font-weight: bold;
  color: white;
`;

const Value = styled.p`
  position: relative;
  font-size: 28px;
  left: 300px;
  top: -7px;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 768px) {
    left: 180px;
  }
`;

const ButtonBuy = styled.button`
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
  justify-items: center;
  border: none;
  background-color: black;
  color: white;
  font-size: 28px;
  height: 97px;
  font-weight: bold;
  font-family: 'Montserrat';

  @media only screen and (max-width: 768px) {
    height: 164px;
  }
`;

const ShoppingCart: React.FC<ShoppingCartProps> = ( {  isOpen, cartItems, toggleCar, removeFromCart, updateCartItemQuantity, total}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleToggleCar = () => {
    toggleCar();
  };

  const totalQuantity = cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity || 1), 0);

  return (
    <>
      <ButtonCar
         onClick={handleToggleCar}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
        <CarIcon src={isHovered ? process.env.PUBLIC_URL + '/images/carWhite.png' : process.env.PUBLIC_URL + '/images/carBlack.png'}/>
        <Qt>{totalQuantity}</Qt>
      </ButtonCar>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen'}>
        <CartContainer isOpen={isOpen} >
          <TitleCar>Carrinho de compras</TitleCar>
          <ButtonCloseCar onClick={handleToggleCar} ><span>X</span></ButtonCloseCar>
          <BackListCar>
            <ListCar items={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />
          </BackListCar>
          <Total>Total:</Total>
          <Value>R${total}</Value>
          <ButtonBuy onClick={handleToggleCar} >Finalizar Compra</ButtonBuy>
        </CartContainer>
      </StyleSheetManager>
    </>
  );
};

export default ShoppingCart;