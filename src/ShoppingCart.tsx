import React from 'react';
import styled, { keyframes } from 'styled-components';
import ListCar from './ListCar';
import type { Product } from './types';

interface ShoppingCartProps {
  isOpen: boolean;
  cartItems: Product[];
  toggleCart: () => void;
}

const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100; /* Valor alto para garantir que fique sobreposto */
  height: 100vh; /* 100% da altura da janela do navegador */
  right: ${({ isOpen }) => (isOpen ? '0' : '-486px')}; /* Esconde a div fora da tela */
  width: 486px;
  height: 100%;
  background-color: #0F52BA;
  transition: right 0.3s ease; /* Adiciona uma transição suave */
  box-shadow: -2px 0px 5px 0px rgba(0,0,0,0.5); /* Adiciona uma sombra */
`;

const SlideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const CartButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

const ButtonCar = styled.button`
  display: right;
  width: 90px;
  height: 45px;
  margin-top: 29px;
  margin-right: 65px;
  border-radius: 8px;
  background-color: #FFFFFF;
  //justify-content: left;
  //align-items: left;
  text-align: left;
  border: 0;
  font-size: 20px;

    /* Estilo quando o mouse está sobre o botão */
    &:hover {
    background-color: #000000; /* Nova cor quando o mouse está sobre o botão */
    color: white;
  }
`
const CarIcon = styled.img`
  width: 19.01px;
  height: 18px;
  //margin-top: px;
  margin-left: 15px;
  margin-right: 13px;
`

const TitleCar = styled.h1`
  flex-wrap: wrap;
  margin-top: 36px;
  margin-left: 36px;
  width: 180px;
  font-family: 'Montserrat', sans-serif;
  font-size: 27px;
  font-weight: bold;
  text-align: left;
`

const ButtonCloseCar = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 50%;
  color: white;
  padding: 10px;
  text-align: center;
  line-height: 1px;
  border: 0;
  font-size: 28px;
`

const BackListCar = styled.div`
  //position: fixed;
  width: 385px;
  height: 1000px;
  margin-left: 36px;
`

const Total = styled.p`
  position: absolute;
  //top: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  left: 20px;
  margin-left: 36px;
  font-weight: bold;
`

const Value = styled.p`
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  right: 25px;
  font-weight: bold;
  //margin-right: 25px;
  //bottom: 0;
`

const ButtonBuy = styled.button`
  position:  absolute;
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
`

const ShoppingCart: React.FC<ShoppingCartProps> = ( {  isOpen, cartItems, toggleCart}) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <>
      <ButtonCar
         onClick={handleToggleCart}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
        <CarIcon src={isHovered ? process.env.PUBLIC_URL + '/images/carWhite.png' : process.env.PUBLIC_URL + '/images/carBlack.png'}/>
        <span>0</span>
      </ButtonCar>
      {/* <CartButton onClick={toggleCart}>Carrinho</CartButton> */}
      <CartContainer isOpen={isOpen} >
        <TitleCar>Carrinho de compras</TitleCar>
        <ButtonCloseCar onClick={handleToggleCart} ><span>X</span></ButtonCloseCar>
        <BackListCar>
          Produtos
          <ListCar items={cartItems} />
        </BackListCar>
        <Total>Total:</Total>
        <Value>R$789</Value>
        <ButtonBuy onClick={handleToggleCart} >Finalizar Compra</ButtonBuy>
        {/* Conteúdo do carrinho aqui */}
      </CartContainer>
    </>
  );
};

export default ShoppingCart;