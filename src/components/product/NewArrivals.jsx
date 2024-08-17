import { Col, Container, Row } from "react-bootstrap";
import useCheckMobileScreen from "../../hook/useCheckMobileScreen";
import {
  BrandDescription,
  BrandTitleStyled,
  WrapProduct,
} from "../../styles/Product";
import pro5 from "../../assets/img/product/pro5.png";
import pro6 from "../../assets/img/product/pro6.png";
import pro7 from "../../assets/img/product/pro7.png";
import pro8 from "../../assets/img/product/pro8.png";
import Card from "./Card";

const NewArrivals = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <WrapProduct>
      <Container>
        <BrandTitleStyled>New Arrivals</BrandTitleStyled>
        <BrandDescription>
          Here’s some of our new arrivals products people are in love with.
        </BrandDescription>
        <Row>
          <Col md={3}>
            <Card imgUrl={pro5} lable={"Sold Out"} />
          </Col>
          <Col md={3}>
            <Card imgUrl={pro6} />
          </Col>
          <Col md={3}>
            <Card imgUrl={pro7} lable={"Pre-Order"} />
          </Col>
          <Col md={3}>
            <Card imgUrl={pro8} />
          </Col>
        </Row>
      </Container>
    </WrapProduct>
  );
};

export default NewArrivals;
