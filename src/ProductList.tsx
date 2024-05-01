import { Product } from './types'; // Se necessário, defina o tipo Product
import ProductCard from './ProductCar';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Chamada a API para listar produtos
const fetchProducts = async () => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    if (!response.ok) {
      throw new Error('Erro ao carregar produtos');
    }

    const productsResponse = await response.json();
    return productsResponse.products;
};

//Tamanho do header
const HeaderHeight = 101;

const Back = styled.div`
    background-color: #f5f5f5;
    height: calc(100vh - ${HeaderHeight}px);//calculando tamanho da div subtraindo o tamanho do Header

    @media only screen and (max-width: 768px) {
        height: 100%;
        padding-bottom: 70px;
    }
`;

const CardContainer = styled(motion.div)`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 150px;

    @media only screen and (max-width: 768px) {
        margin-left: 62px;
        margin-right: 62px;
        padding-top: 18px;
    }
`;

const ProductList: React.FC <{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };

        fetchData();
    }, []); // O array vazio como segundo argumento garante que o useEffect só seja executado uma vez

    if (products.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <Back>
            <CardContainer 
            className="product-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
            </CardContainer>
        </Back>
    );
};
  
export default ProductList;