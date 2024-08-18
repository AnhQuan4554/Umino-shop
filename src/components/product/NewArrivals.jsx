import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import useCheckMobileScreen from "../../hook/useCheckMobileScreen";
import {
  BrandDescription,
  BrandTitleStyled,
  CarouselMobileStyled,
  RowMobileStyled,
  WrapProduct,
} from "../../styles/Product";

import Card from "./Card";
import { NewArrivalsInfor } from "./NewArrivalsInfor";
import { newArrivalsData } from "../../data/newArrivalsData";

const btnPrev = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20.0039" r="19.5" fill="white" stroke="#EBEBEB" />
    <path
      d="M22.4688 23.8633C22.6042 23.9987 22.6719 24.1602 22.6719 24.3477C22.6719 24.5247 22.6042 24.6758 22.4688 24.8008C22.3438 24.9362 22.1875 25.0039 22 25.0039C21.8125 25.0039 21.6562 24.9362 21.5312 24.8008L17.5312 20.8008C17.3958 20.6758 17.3281 20.5247 17.3281 20.3477C17.3281 20.1602 17.3958 19.9987 17.5312 19.8633L21.5312 15.8633C21.6562 15.7383 21.8125 15.6758 22 15.6758C22.1875 15.6758 22.3438 15.7383 22.4688 15.8633C22.6042 15.9987 22.6719 16.1602 22.6719 16.3477C22.6719 16.5247 22.6042 16.6758 22.4688 16.8008L18.9375 20.332L22.4688 23.8633Z"
      fill="#111111"
    />
  </svg>
);
const btnNext = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20.0039" r="19.5" fill="white" stroke="#EBEBEB" />
    <path
      d="M18.4688 24.8008C18.3438 24.9362 18.1875 25.0039 18 25.0039C17.8125 25.0039 17.6562 24.9362 17.5312 24.8008C17.3958 24.6758 17.3281 24.5247 17.3281 24.3477C17.3281 24.1602 17.3958 23.9987 17.5312 23.8633L21.0625 20.332L17.5312 16.8008C17.3958 16.6758 17.3281 16.5247 17.3281 16.3477C17.3281 16.1602 17.3958 15.9987 17.5312 15.8633C17.6562 15.7383 17.8125 15.6758 18 15.6758C18.1875 15.6758 18.3438 15.7383 18.4688 15.8633L22.4688 19.8633C22.6042 19.9987 22.6719 20.1602 22.6719 20.3477C22.6719 20.5247 22.6042 20.6758 22.4688 20.8008L18.4688 24.8008Z"
      fill="#111111"
    />
  </svg>
);
const NewArrivals = () => {
  const isMobile = useCheckMobileScreen();

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const dataOfMobile = chunkArray(newArrivalsData, 2);
  return (
    <WrapProduct>
      <Container>
        <BrandTitleStyled>New Arrivals</BrandTitleStyled>
        <BrandDescription>
          Here’s some of our new arrivals products people are in love with.
        </BrandDescription>
        {!isMobile ? (
          <Row>
            {newArrivalsData.map((item) => (
              <Col key={item.id} md={3}>
                <div>
                  <Card
                    imgUrl={item.imgUrl}
                    lable={item.lable}
                    backGroud={item.backGroud}
                    discount={item.discount}
                  />
                  <NewArrivalsInfor
                    name={item.detail.name}
                    price={item.detail.price}
                    oldPrice={item.detail.oldPrice}
                    listColor={item.detail.color}
                  />
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <RowMobileStyled>
            <CarouselMobileStyled nextIcon={btnNext} prevIcon={btnPrev}>
              {dataOfMobile.map((item, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {item.map((slideItem) => (
                      <Col key={slideItem.id} xs={6}>
                        <Card
                          imgUrl={slideItem.imgUrl}
                          lable={slideItem.lable}
                          backGroud={slideItem.backGroud}
                          discount={slideItem.discount}
                        />
                        <NewArrivalsInfor
                          name={slideItem.detail.name}
                          price={slideItem.detail.price}
                          oldPrice={slideItem.detail.oldPrice}
                          listColor={slideItem.detail.color}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </CarouselMobileStyled>
          </RowMobileStyled>
        )}
      </Container>
    </WrapProduct>
  );
};

export default NewArrivals;
