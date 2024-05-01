import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGroup } from 'react-bootstrap';
import type { Product } from './types';

interface ListCarProps {
    items: Product[];
    removeFromCart: (productId: number) => Product[];
    updateCartItemQuantity: (productId: number, quantity: number) => void;
};

const Prod = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px;
    height: 95px;
    width: 379px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 250px;
        height: 220px;
    }
`;

const DelProduct = styled.button`
    position: relative;
    top: -6px;
    left: 370px;
    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 50%;
    color: white;
    padding-left: 5px;
    line-height: 0;
    border: 0;
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: bold;


    @media only screen and (max-width: 768px) {
        font-size: 27px;
        background-color: transparent;
        color: black;
        left: 210px;
        top: 15px;
    }
`;

const Image = styled.img`
    top: 20px;
    width: 46px;
    height: 57px;
    margin-top: 17px;
    margin-left: 10px;
    border: none;

    @media only screen and (max-width: 768px) {
        width: 80px;
        height: 95px;
        margin-left: 32%;
        margin-top: 0px;
    }
`;

const Descriopton = styled.p`
    position: relative;
    float: right;
    margin-top: 27px;
    text-align: left;
    width: 113px;
    height: 66px;
    font-size: 13px;
    flex-wrap: wrap;
    color: black;
    margin-left: 20px;

    @media only screen and (max-width: 768px) {
        width: 200px;
        height: 21px;
        font-size: 16px;
        margin-top: 10px;
        text-align: center;
    }
`;

const Qtd = styled.p`
    position:  relative;
    width: 11px;
    height: 6px;
    margin-top: 27px;
    font-size: 5px;
    color: black;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Price = styled.p`
    position: relative;
    width: 62px;
    height: 17px;
    top: 35px;
    left: 35px;
    font-size: 14px;
    color: black;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        margin-top: -100px;
        margin-left: 110px;
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #373737;
        color: white;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        align-content: center;
        padding-top: 7px;
    }
`;

const Btn = styled.button`
    background-color: transparent;
    color: black;
    border: none; /* Adicionei uma borda sólida */
    width: 15px; /* Ajuste o tamanho do botão conforme necessário */
    height: 10px; /* Ajuste o tamanho do botão conforme necessário */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: 'Montserrat';
    letter-spacing: 2px;
    
    @media only screen and (max-width: 768px) {
        margin-top: 6px;
        width: 30px;
        font-size: 25px;
        font-weight: normal;
        letter-spacing: 4px;
    }
`;

const BtnGroup = styled(ButtonGroup)`
    position: relative;
    border-radius: 8px;
    border: 0.5px solid #BFBFBF;
    padding: 3px;
    margin-top: 35px;
    margin-left: -11px;
    width: 50px;
    height: 19px;
    justify-content: center;
    font-size: 12px;

    @media only screen and (max-width: 768px) {
        left: 30px;
        top: -30px;
        width: 97px;
        height: 34px;
    }
`;

const Sp = styled.span`
    padding: 3px;
    font-size: 10px;
    color: #BFBFBF;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

interface QuantitySelectorProps {
    productId: number; // Adicione uma propriedade para o id do produto
    updateCartItemQuantity: (productId: number, quantity: number) => void; // Adicione uma propriedade para a função de atualização de quantidade
};

// Componente QuantitySelector
const QuantitySelector: React.FC<QuantitySelectorProps> = ({ productId, updateCartItemQuantity }) => {
  // Estado para controlar a quantidade
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItemQuantity(productId, newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemQuantity(productId, newQuantity);
    }
  };

  return (
    <BtnGroup>
      <Btn onClick={decreaseQuantity}>-</Btn>
      <Btn><Sp>|</Sp>{quantity}<Sp>|</Sp></Btn>
      <Btn onClick={increaseQuantity}>+</Btn>
    </BtnGroup>
  );
};


const ListCar: React.FC<ListCarProps> = ({ items, removeFromCart, updateCartItemQuantity }) => {

    return(
        <>
            {items.map((item, index)=> (     
                <Prod key={index}>
                    <DelProduct onClick={() => removeFromCart(item.id)}>X</DelProduct>
                    <Image src={`${process.env.PUBLIC_URL}/images/${item.id}.jpg`}></Image>
                    <Descriopton>{item.name}</Descriopton>
                    <Qtd>Qtd:</Qtd>
                    <QuantitySelector productId={item.id} updateCartItemQuantity={updateCartItemQuantity} />
                    <Price>R${item.price * (item.quantity > 0 ? item.quantity : 1)}</Price>
                </Prod>
            ))}
        </>
    )
};

export default ListCar; 