import ContainerStyled from "../styles/ContainerStyled";
import search from "../assets/icons/search.svg";
import clock from "../assets/icons/clock.svg";
import wishlist from "../assets/icons/wishlist.svg";
import cart from "../assets/icons/cart.svg";
import avatar from "../assets/icons/login.svg";
import { Image } from "react-bootstrap";
import useCheckMobileScreen from "../hook/useCheckMobileScreen";

const Toolbar = () => {
  let icons = [search, avatar, clock, wishlist, cart];
  const isMobile = useCheckMobileScreen();
  if (isMobile) {
    icons = [search, cart];
  }

  return (
    <ContainerStyled>
      {icons.map((icon, index) => (
        <Image
          key={index}
          style={{
            marginRight: index !== icons.length - 1 ? "20px" : "0",
            cursor: "pointer",
          }}
          src={icon}
        />
      ))}
    </ContainerStyled>
  );
};

export default Toolbar;
