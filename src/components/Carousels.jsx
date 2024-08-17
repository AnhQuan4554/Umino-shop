import { Image } from "react-bootstrap";
import carouselsImg from "../assets/img/carousels-img.png";
import Carousel from "react-bootstrap/Carousel";
import {
  ButtonExploreStyled,
  ButtonTextStyled,
  CarouselStyled,
  ExplainCarouselStyled,
  IconWrapper,
  StyledCarouselCaption,
  TitleCarouselStyled,
  WrapTextCarouselCaptionStyled,
} from "../styles/CarouselsStyled";
import useCheckMobileScreen from "../hook/useCheckMobileScreen";

const prevIconSvg = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 6 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.77754 9.66675L1.80488 5.69409L5.77754 1.72144C5.92988 1.58081 6.00605 1.41089 6.00605 1.21167C6.00605 1.00073 5.92988 0.819092 5.77754 0.666748C5.63691 0.526123 5.46113 0.455811 5.25019 0.455811C5.03926 0.455811 4.86348 0.526123 4.72285 0.666748L0.222851 5.16675C0.070507 5.31909 -0.00566483 5.50073 -0.00566483 5.71167C-0.00566483 5.91089 0.070507 6.08081 0.222851 6.22144L4.72285 10.7214C4.86348 10.8738 5.03926 10.95 5.25019 10.95C5.46113 10.95 5.63691 10.8738 5.77754 10.7214C5.92988 10.5808 6.00605 10.4109 6.00605 10.2117C6.00605 10.0007 5.92988 9.81909 5.77754 9.66675Z"
      fill="#111111"
    />
  </svg>
);
const nextIconSvg = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.46875 9.80078C1.34375 9.9362 1.1875 10.0039 1 10.0039C0.8125 10.0039 0.65625 9.9362 0.53125 9.80078C0.395833 9.67578 0.328125 9.52474 0.328125 9.34766C0.328125 9.16016 0.395833 8.9987 0.53125 8.86328L4.0625 5.33203L0.53125 1.80078C0.395833 1.67578 0.328125 1.52474 0.328125 1.34766C0.328125 1.16016 0.395833 0.998698 0.53125 0.863281C0.65625 0.738281 0.8125 0.675781 1 0.675781C1.1875 0.675781 1.34375 0.738281 1.46875 0.863281L5.46875 4.86328C5.60417 4.9987 5.67188 5.16016 5.67188 5.34766C5.67188 5.52474 5.60417 5.67578 5.46875 5.80078L1.46875 9.80078Z"
      fill="#111111"
    />
  </svg>
);

export const CustomControlIcon = ({ icon }) => {
  return <IconWrapper>{icon}</IconWrapper>;
};

const Carousels = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <div>
      <CarouselStyled
        nextIcon={!isMobile && <CustomControlIcon icon={nextIconSvg} />}
        prevIcon={!isMobile && <CustomControlIcon icon={prevIconSvg} />}
      >
        <Carousel.Item>
          <div style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={carouselsImg}
            />
          </div>
          <StyledCarouselCaption>
            <WrapTextCarouselCaptionStyled>
              <TitleCarouselStyled>Stylish</TitleCarouselStyled>
              <TitleCarouselStyled>Top Trending</TitleCarouselStyled>
            </WrapTextCarouselCaptionStyled>
            <ExplainCarouselStyled>
              {`So soft you don't want to take it off.`}
            </ExplainCarouselStyled>
            <ButtonExploreStyled>
              <ButtonTextStyled>Explore Now</ButtonTextStyled>
            </ButtonExploreStyled>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={carouselsImg}
            />
          </div>
          <StyledCarouselCaption>
            <WrapTextCarouselCaptionStyled>
              <TitleCarouselStyled>Stylish</TitleCarouselStyled>
              <TitleCarouselStyled>Top Trending</TitleCarouselStyled>
            </WrapTextCarouselCaptionStyled>
            <ExplainCarouselStyled style={{}}>
              {`So soft you don't want to take it off.`}
            </ExplainCarouselStyled>
            <ButtonExploreStyled>
              <ButtonTextStyled>Explore Now</ButtonTextStyled>
            </ButtonExploreStyled>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "100%" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={carouselsImg}
            />
          </div>
          <StyledCarouselCaption>
            <WrapTextCarouselCaptionStyled>
              <TitleCarouselStyled>Stylish</TitleCarouselStyled>
              <TitleCarouselStyled>Top Trending</TitleCarouselStyled>
            </WrapTextCarouselCaptionStyled>
            <ExplainCarouselStyled style={{}}>
              {`So soft you don't want to take it off.`}
            </ExplainCarouselStyled>
            <ButtonExploreStyled>
              <ButtonTextStyled>Explore Now</ButtonTextStyled>
            </ButtonExploreStyled>
          </StyledCarouselCaption>
        </Carousel.Item>
      </CarouselStyled>
    </div>
  );
};

export default Carousels;
