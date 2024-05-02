import { screen, render, act } from "@testing-library/react"
import ProductCar from "./ProductCar"


// Mockando a função addToCart
const mockAddToCart = jest.fn();

test('compra', async () => {
    // Renderiza o componente ProductList com uma função addToCart mockada
    await act(async () => {
        render(<ProductCar addToCart={mockAddToCart} product={{ id: 1, 
            name: "Iphone 11 128 GB", 
            description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.", 
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            price: 5000.00,
            brand: "Apple", 
            quantity: 1}}/>);
    });

    // Aguarda até que o componente termine de carregar (nesse caso, "Carregando..." não será exibido)
    // Se você não está esperando que "Carregando..." seja exibido, você pode remover esse await
    await screen.findByText(/COMPRAR/i);

    // Verifica se o botão "COMPRAR" está presente
    const buyButton = screen.getByText(/COMPRAR/i);
    expect(buyButton).toBeInTheDocument();
});