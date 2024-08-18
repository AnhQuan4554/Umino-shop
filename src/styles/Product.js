import { Button, Carousel, Image, Row } from "react-bootstrap";
import styled from "styled-components";

export const WrapLayoutProduct = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 200px;
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
  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-top: 60px;
    font-size: 40px;
    line-height: unset;
  }
  @media (max-width: 576px) {
    margin-bottom: 15px;
    margin-top: 40px;
    font-size: 30px;
    line-height: unset;
  }
`;
export const BrandDescription = styled.p`
  margin: 0;
  color: #555555;
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 0 50px;
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

export const WrapLableArrivalsStyled = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LableOutOfStockStyled = styled.div`
  background-color: ${(props) => props.backGroud};
  border-radius: 30px;
  font-size: 13px;
  color: #fff;
  width: 70px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LableDiscountStyled = styled.div`
  background-color: #d73f0f;
  border-radius: 30px;
  font-size: 13px;
  color: #fff;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;
/// NewArrivalsInfor
export const WrapArrivalsInforStyled = styled.div`
  margin-top: 16px;
  position: unset;
`;

export const ProductNameStyled = styled.p`
  margin: 0;
  font-size: 16px;
  color: #111111;
  margin-bottom: 8px;
  text-align: left;
`;

export const StarRateStyled = styled.div`
  height: 10px;
  margin-bottom: 8px;
  display: flex;
`;

export const ProductPriceStyled = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.oldPrice ? "#D73F0F" : "#111111")};
  margin-bottom: 8px;
  text-align: left;
`;

export const ProductOldPriceStyled = styled.p`
  margin: 0;
  font-size: 14px;
  color: #d6d6d6;
  margin-bottom: 8px;
  text-align: left;
  text-decoration: line-through;
  margin-left: 5px;
`;

export const ListColorStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapColorStyled = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
export const Color = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.backGroup};
`;

//Carousel of mobile

export const CarouselMobileStyled = styled(Carousel)`
  & .carousel-control-next {
    position: absolute;
    top: -8%;
    bottom: unset;
    right: 40%;
    transform: translateX(40%);
  }
  & .carousel-control-prev {
    position: absolute;
    top: -8%;
    bottom: unset;
    left: 40%;
    transform: translateX(-40%);
  }
  @media (max-width: 576px) {
    & .carousel-control-next {
      top: -12%;
    }
    & .carousel-control-prev {
      top: -12%;
    }
  }
`;

export const RowMobileStyled = styled(Row)`
  @media (max-width: 768px) {
    margin-top: 56px;
  }
`;
