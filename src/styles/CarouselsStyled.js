import { Button, Carousel } from "react-bootstrap";
import styled from "styled-components";
export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ebebeb;
  opacity: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    background: #111111;
    color: #fff;
    /* opacity: 100%; */
  }
`;

export const StyledCarouselCaption = styled(Carousel.Caption)`
  top: 10%;
  left: 10%;
  right: unset;
  bottom: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 576px) {
    align-items: flex-start;
  }
`;

export const TitleCarouselStyled = styled.p`
  color: #111111;
  font-size: 80px;
  font-weight: 400;
  line-height: 80px;
  @media (max-width: 992px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 768px) {
    text-align: left;
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 576px) {
    text-align: left;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 6px;
  }
`;

export const WrapTextCarouselCaptionStyled = styled.div`
  margin-bottom: 20px;
  @media (max-width: 576px) {
    margin-bottom: 6px;
  }
`;

export const ExplainCarouselStyled = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #111111;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ButtonExploreStyled = styled(Button)`
  background: #111111;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 200px;
  height: 50px;

  @media (max-width: 576px) {
    margin-top: 0px;
    width: 160px;
  }
`;

export const ButtonTextStyled = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CarouselStyled = styled(Carousel)`
  & .carousel-indicators [data-bs-target] {
    /* background-color: red; */
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00000033;
    border: unset;
    &.active {
      background: #111111;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
`;
