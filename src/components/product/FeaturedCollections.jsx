import { Col, Container, Row } from "react-bootstrap";
import {
  BrandDescription,
  BrandTitleStyled,
  WrapProduct,
} from "../../styles/Product";
import pro1 from "../../assets/img/product/pro1.png";
import pro2 from "../../assets/img/product/pro2.png";
import pro3 from "../../assets/img/product/pro3.png";
import pro4 from "../../assets/img/product/pro4.png";
import Card from "./Card";
import useCheckMobileScreen from "../../hook/useCheckMobileScreen";

const FeaturedCollections = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <WrapProduct>
      <Container>
        <BrandTitleStyled>Featured Collections</BrandTitleStyled>
        <BrandDescription>
          Elevate your style with our chic featured collection—where fashion
          meets flair effortlessly.
        </BrandDescription>
        {!isMobile ? (
          <Row>
            <Col md={4}>
              <Card imgUrl={pro1} buttonTitle={"Clothing"} />
            </Col>
            <Col md={4}>
              <Row style={{ height: "100%", justifyContent: "space-between" }}>
                <Col md={12}>
                  <Card imgUrl={pro2} buttonTitle={"Sunglasses"} />
                </Col>
                <Col md={12} className="mt-4">
                  <Card imgUrl={pro3} buttonTitle={"Bags"} />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Card imgUrl={pro4} buttonTitle={"Sneaker"} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={12}>
                  <Card imgUrl={pro1} buttonTitle={"Clothing"} />
                </Col>
                <Col xs={12} className="mt-4">
                  <Card
                    imgUrl={pro2}
                    buttonTitle={"Sunglasses"}
                    translate={"-10px"}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Col xs={12}>
                  <Card imgUrl={pro3} buttonTitle={"Bags"} />
                </Col>
                <Col xs={12} className="mt-4">
                  <Card imgUrl={pro4} buttonTitle={"Sneaker"} />
                </Col>
              </Row>
            </Col>
          </Row>
        )}

        {/*  */}
      </Container>
    </WrapProduct>
  );
};

export default FeaturedCollections;
