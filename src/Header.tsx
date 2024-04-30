import styled from 'styled-components';

// Estilos para o cabeçalho
const HeaderWrapper = styled.header`
  background-color: #0F52BA; /* Cor de fundo do cabeçalho */
  color: #FFFFFF; /* Cor do texto do cabeçalho */
  width: flex;
  height: 101px;
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.h1`
  font-size: 40px; /* Tamanho da fonte do título */
  margin-top: 28px;
  margin-left: 65px; /* Remover margens padrão */
  text-align: left; /* Alinhamento do texto no centro */
  display: flex;
  font-weight: bold;
`;

const SubHeaderText = styled.h2`
  font-size: 18px; /* Tamanho da fonte do subtítulo */
  margin-top: 19px;
  padding-left: 8px;
`;

const Header: React.FC = () => {

  return (
    <HeaderWrapper>
      <HeaderText>MKS <SubHeaderText>Sistemas</SubHeaderText></HeaderText>
    </HeaderWrapper>
  );
};

export default Header;