import React from 'react';
import styled from 'styled-components';

const About = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #EEEEEE;
  color: #000000;
  text-align: center;
  padding: 17px;
`;

const Baseboard: React.FC = () => {
    return (
        <About>MKS sistemas © Todos os direitos reservados</About>
    );
};

export default Baseboard;