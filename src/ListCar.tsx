import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGroup } from 'react-bootstrap';
import type { Product } from './types';

interface ListCarProps {
    items: Product[];
    removeFromCart: (productId: number) => Product[];
    updateCartItemQuantity: (productId: number, quantity: number) => void;
}

const Product = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px;
    height: 95px;
    width: 379px;
    margin-top: 30px;
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
`;

const Image = styled.img`
    top: 20px;
    width: 46px;
    height: 57px;
    margin-top: 17px;
    margin-left: 10px;
    border: none;
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
`;

const Qtd = styled.p`
    position:  relative;
    width: 11px;
    height: 6px;
    margin-top: 27px;
    font-size: 5px;
    color: black;
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
`;

const Sp = styled.span`
    padding: 3px;
    font-size: 10px;
    color: #BFBFBF;
`;

interface QuantitySelectorProps {
    productId: number; // Adicione uma propriedade para o id do produto
    updateCartItemQuantity: (productId: number, quantity: number) => void; // Adicione uma propriedade para a função de atualização de quantidade
};

// Componente QuantitySelector
const QuantitySelector: React.FC<QuantitySelectorProps> = ({ productId, updateCartItemQuantity }) => {
  // Estado para controlar a quantidade
  const [quantity, setQuantity] = useState(1);

  // Função para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateCartItemQuantity(productId, quantity + 1); // Atualiza a quantidade no estado do carrinho
  };

  // Função para diminuir a quantidade
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateCartItemQuantity(productId, quantity - 1); // Atualiza a quantidade no estado do carrinho
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
                <Product key={index}>
                    <DelProduct onClick={() => removeFromCart(item.id)}>X</DelProduct>
                    <Image src={`${process.env.PUBLIC_URL}/images/${item.id}.jpg`}></Image>
                    <Descriopton>{item.name}</Descriopton>
                    <Qtd>Qtd:</Qtd>
                    <QuantitySelector productId={item.id} updateCartItemQuantity={updateCartItemQuantity}/>
                    <Price>R${item.price * (item.quantity > 0 ? item.quantity : 1)}</Price>
                </Product>
            ))}
        </>
    )
};

export default ListCar; 