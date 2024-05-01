import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #0F52BA; 
  color: #FFFFFF; 
  width: flex;
  height: 101px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 48px;
  }
`;

const HeaderText = styled.h1`
  font-size: 40px; 
  margin-top: 28px;
  margin-left: 65px; 
  text-align: left; 
  display: flex;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 5px;
    margin-left: 18px;
  }
`;

const SubHeaderText = styled.h2`
  font-size: 18px; 
  margin-top: 19px;
  padding-left: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 19px;
    margin-top: 12px;
  }
`;

const Header: React.FC = () => {

  return (
    <HeaderWrapper>
      <HeaderText>MKS <SubHeaderText>Sistemas</SubHeaderText></HeaderText>
    </HeaderWrapper>
  );
};

export default Header;