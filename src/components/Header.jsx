import styled from "styled-components";
import Navigation from "./Navigation";
import useCheckMobileScreen from "../hook/useCheckMobileScreen";
import NavOfMobile from "./NavOfMobile";

const WrapperHeader = styled.section`
  padding: 25px 30px;
`;

const Header = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <WrapperHeader>
      <Navigation />
      {isMobile && <NavOfMobile />}
    </WrapperHeader>
  );
};

export default Header;
