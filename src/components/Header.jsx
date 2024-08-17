import styled from "styled-components";
import Navigation from "./Navigation";

const WrapperHeader = styled.section`
  padding: 25px 30px;
`;

const Header = () => {
  return (
    <WrapperHeader>
      <Navigation />
    </WrapperHeader>
  );
};

export default Header;
