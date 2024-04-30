import React from 'react';
import { Product } from './types'; // Se necessário, defina o tipo Product
import styled from 'styled-components';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const Card = styled.div`
  //border: 1px solid #ccc;
  border-radius: 8px;
  //padding: 16px;
  margin: 8px;
  width: 218px;
  height: 285px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Alinha os elementos verticalmente */
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 38%;
  border-radius: 8px;
`;

const Title = styled.h1`
  width: 124px;
  padding-left: 15px;
  //height: 38px;
  //top: 170px;
  //left: 14px;
  //gap: 0px;
  //opacity: 0px;
  //font-family: Montserrat;
  font-size: 16px;
  //font-weight: 400;
  //line-height: 19px;
  text-align: left;

`

const Price = styled.span`
  font-size: 15px;
  color: #FFFFFF;
  background-color: #373737;
  padding: 4px 8px;
  border-radius: 5px;
  align-self: flex-end; /* Alinha o preço à direita */
  //text-align: right;
  //justify-content: ;
  border: 3px solid ;
`;

const ProductDescription = styled.p`
  font-size: 10px;
  width: 192px;
  //height: px;
  //top: 216px;
  //left: 14px;
  text-align: left;
  padding-left: 15px;
`;

const Buy = styled.button`
  display: flex;
  width: 100%;
  height: 10%;
  //gap: 0px;
  border-radius: 0px 0px 8px 8px;
  background-color: #0F52BA;
  bottom: 0;
  border: 0;
  font-size: 14px;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  justify-content: center;
  align-items: center;

  /* Estilo quando o mouse está sobre o botão */
  &:hover {
    background-color: #0ba56a; /* Nova cor quando o mouse está sobre o botão */
  }
`
const CartIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px; /* Adiciona um espaço entre o ícone e o texto */
`;

const ProductCard: React.FC<ProductCardProps> = ({ addToCart, product }) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/${product.id}.jpg`; // Caminho da imagem baseado no ID do produto
  const formattedPrice = parseInt(product.price.toString()).toLocaleString('pt-BR');

  return (
    <Card>
      <ProductImage src={imagePath} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>R${formattedPrice}</Price>
      <ProductDescription>{product.description}</ProductDescription>
      <Buy onClick={() => addToCart(product)}>
        <CartIcon src="./images/buy.png"/>
        COMPRAR
      </Buy>
    </Card>
  );
};

export default ProductCard;