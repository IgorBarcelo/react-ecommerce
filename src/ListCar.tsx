import React, { useState } from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from 'react-bootstrap';
import type { Product } from './types';

const Product = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px;
    height: 95px;
    width: 379px;
    //text-align: center;
`

const DelProduct = styled.button`
    position: relative;
    top: -6px;
    left: 370px;
    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 0;
    border: 0;
    font-size: 14px;
`

const Image = styled.img`
    //position: absolute;
    //display: inline-block;
    top: 20px;
    //float: left;
    width: 46px;
    height: 57px;
    margin-top: 17px;
    margin-left: 10px;
    border: none;
`

const Descriopton = styled.p`
    position: relative;
    float: right;
    margin-top: 27px;
    text-align: left;
    width: 113px;
    height: 66px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    flex-wrap: wrap;
    color: black;
    margin-left: 20px;
    //justify-content: left;
`

const Qtd = styled.p`
    position:  relative;
    width: 11px;
    height: 6px;
    //margin-left: 10px;
    margin-top: 27px;
    font-family: 'Montserrat', sans-serif;
    font-size: 5px;
    color: black;
    //text-align: left;
    //justify-content: left;
    //align-items: start;
`

const Qt = styled.button`
    //position: relative;
    //width: 50px;
    //height: 19px;
    //margin-top: 37px;
    //left: -10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    border: none;
    background-color: transparent;
`

const Price = styled.p`
    position: relative;
    width: 62px;
    height: 17px;
    top: 35px;
    left: 35px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: black;
    font-weight: bold;
`

const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
`;

const Radius = styled.div`
    position: relative;
    bottom: 0;
    width: 50px;
    height: 19px;
    border-radius: 8px;
    border-color: black;
    background-color: blue;
`

const Btn = styled.button`
    background-color: transparent;
    color: black;
    //border-radius: 50%;
    border: none; /* Adicionei uma borda sólida */
    width: 15px; /* Ajuste o tamanho do botão conforme necessário */
    height: 10px; /* Ajuste o tamanho do botão conforme necessário */
    //font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

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
    align-items: start;
    text-align: center;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;
    
`

const Sp = styled.span`
    padding: 3px;
    font-size: 10px;
    color: #BFBFBF;
`

// Componente QuantitySelector
const QuantitySelector: React.FC = () => {
  // Estado para controlar a quantidade
  const [quantity, setQuantity] = useState(1);

  // Função para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Função para diminuir a quantidade
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
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

interface ListCarProps {
    items: Product[];
}

const ListCar: React.FC<ListCarProps> = ({ items }) => {
    // const imagePath = `${process.env.PUBLIC_URL}/images/${item.productId}.jpg`;
    return(
        <>
            {items.map((item, index)=> (     
                <Product key={index}>
                    <DelProduct>X</DelProduct>
                    <Image src={`${process.env.PUBLIC_URL}/images/${item.id}.jpg`}></Image>
                    <Descriopton>{item.name}</Descriopton>
                    <Qtd>Qtd:</Qtd>
                    <QuantitySelector />
                    <Price>R${item.price}</Price>
                </Product>
            ))}
        </>
    )
}

export default ListCar; 