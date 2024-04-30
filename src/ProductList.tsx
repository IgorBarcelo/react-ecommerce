import { Product } from './types'; // Se necessário, defina o tipo Product
import ProductCard from './ProductCar';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const fetchProducts = async () => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    if (!response.ok) {
      throw new Error('Erro ao carregar produtos');
    }

    const productsResponse = await response.json();
    return productsResponse.products;
};

const Back = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    position: fixed;
`

const CardContainer = styled(motion.div)`
    display: flex; /* Torna os cards flexíveis */
    flex-wrap: wrap; /* Permite que os cards quebrem linha se necessário */
    justify-content: space-between;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 150px;
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