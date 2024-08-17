import { Button, Image } from "react-bootstrap";
import styled from "styled-components";

export const WrapLayoutProduct = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 576px) {
    /* align-items: flex-start; */
  }
`;

export const WrapProduct = styled.div`
  display: flex;
  justify-content: center;
`;

export const BrandTitleStyled = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: 400;
  line-height: 65px;
  margin-bottom: 25px;
  color: #111111;
`;
export const BrandDescription = styled.p`
  margin: 0;
  color: #555555;
  font-size: 16px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const WrapCard = styled.div`
  background: #ecedef;
  border-radius: 10px;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const CartButtonStyled = styled(Button)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 160px;
  height: 50px;
  border-radius: 30px;
  color: #111111;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    bottom: 20px;
    width: 120px;
    height: 40px;
  }
  @media (max-width: 321px) {
    bottom: 10px;
    width: 80px;
    height: 30px;
  }
`;

export const FeaturedCardStyled = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const LableOutOfStock = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  background-color: #757575;
  margin: 0;
  font-size: 13px;
  color: #fff;
  width: 70px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
