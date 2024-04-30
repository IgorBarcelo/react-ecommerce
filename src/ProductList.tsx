import { Product } from './types'; // Se necessário, defina o tipo Product
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
//import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
//import { fetchProducts } from './fetchProducts';
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
    //width: 100%;
    height: 100vh;
    position: absolute;
`

const CardContainer = styled(motion.div)`
    display: flex; /* Torna os cards flexíveis */
    flex-wrap: wrap; /* Permite que os cards quebrem linha se necessário */
    //justify-content:  center; /* Distribui os cards igualmente no espaço disponível */
    //margin-left: 50px;
    //padding-top: 300px;
    //padding-right: 300px;
    //padding-left: 300px;
    //padding: ;
    position: static;
    //top: 100px;
    //left: 22%;
    //right: 21.5%;
    justify-content: space-between;
    //background-color: blue;
    margin-left: 23%;
    margin-right: 23%;
    margin-top: 150px;
`;

const ProductList: React.FC <{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
    const [products, setProducts] = useState<Product[]>([]);
    //const [cartItems, setCartItems] = useState<Product[]>([]); // Estado para armazenar os produtos no carrinho

    // const addToCart = (product: Product) => {
    //     setCartItems(prevItems => [...prevItems, product]); // Adiciona o produto ao carrinho
    // };

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