import styled from "styled-components";
import wishlist from "../assets/icons/wishlist.svg";
import cart from "../assets/icons/cart.svg";
import avatar from "../assets/icons/login.svg";
import home from "../assets/icons/home.svg";
import shop from "../assets/icons/shop.svg";
import { Image } from "react-bootstrap";

const WrapMobile = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ItemNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;
export const TextNav = styled.span`
  color: #111111;
  font-size: 12px;
  font-weight: 500;
`;

const NavOfMobile = () => {
  const navList = [
    { name: "Home", icon: home },
    { name: "Shop", icon: shop },
    { name: "Account", icon: avatar },
    { name: "Wishlist", icon: wishlist },
    { name: "Cart", icon: cart },
  ];

  return (
    <WrapMobile>
      {navList.map((item) => (
        <ItemNav key={item.name}>
          <Image style={{ width: "16px" }} src={item.icon} />
          <TextNav>{item.name}</TextNav>
        </ItemNav>
      ))}
    </WrapMobile>
  );
};

export default NavOfMobile;
