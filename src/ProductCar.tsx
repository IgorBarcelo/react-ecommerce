import React from 'react';
import { Product } from './types';
import styled from 'styled-components';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
};

const Card = styled.div`
  display: flex;
  border-radius: 8px;
  margin: 8px;
  width: 218px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  margin-right: 20px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 328px;
  }
`;

const ProductImage = styled.img`
  width: 111px;
  height: 138px;
  border-radius: 8px;
  margin-left: 25%;
  padding: 5%;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    width: 127px;
    height: 158px;
    margin-left: 22%;
  }
`;

const Title = styled.h1`
  position: absolute;
  margin-top: 142px;
  width: 124px;
  padding-left: 15px;
  font-size: 16px;
  text-align: left;

  @media only screen and (max-width: 768px) {
    margin-top: 165px;
  }
`;

const Price = styled.span`
  position: absolute;
  margin-top: 145px;
  margin-right: 10px;
  font-size: 15px;
  color: #FFFFFF;
  background-color: #373737;
  padding: 4px 8px;
  border-radius: 5px;
  align-self: flex-end; 

  @media only screen and (max-width: 768px) {
    margin-top: 165px;
  }
`;

const ProductDescription = styled.p`
  position: absolute;
  font-size: 10px;
  width: 192px;
  text-align: left;
  padding-left: 15px;
  margin-top: 205px;

  @media only screen and (max-width: 768px) {
    margin-top: 225px;
  }
`;

const Buy = styled.button`
  display: flex;
  width: 100%;
  height: 10%;
  border-radius: 0px 0px 8px 8px;
  background-color: #0F52BA;
  bottom: 0;
  border: 0;
  font-size: 14px;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';

  
  &:hover {
    background-color: #0ba56a; 
  }

  @media only screen and (max-width: 768px) {
    height: 36px;
  }
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px; 
`;

const ProductCard: React.FC<ProductCardProps> = ({ addToCart, product }) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/${product.id}.jpg`; // Caminho da imagem baseado no ID do produto
  const formattedPrice = parseInt(product.price.toString()).toFixed(0); //Formatando preço para exibir sem os centavos
  const maxLength = 80; //Quantida de caracteres da descrição para limitar dentro da Div
  const shortenedDescription = product.description.length > maxLength ? `${product.description.substring(0, maxLength)}...` : product.description;//Variavel que lê e armazena a descrição com o limite da maxLength

  return (
    <Card>
      <ProductImage src={imagePath} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>R${formattedPrice}</Price>
      <ProductDescription>{shortenedDescription}</ProductDescription>
      <Buy onClick={() => addToCart(product)}>
        <CartIcon src="./images/buy.png"/>
        COMPRAR
      </Buy>
    </Card>
  );
};

export default ProductCard;