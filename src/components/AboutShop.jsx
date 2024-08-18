import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/icons/social/logo.svg";
import {
  BtnSubmit,
  IconSocialStyled,
  InputEmail,
  ListSocialStyled,
  SpanStyled,
  TitleStyled,
} from "../styles/AboutShopStyled";
import cam from "../assets/icons/social/cam.svg";
import face from "../assets/icons/social/face.svg";
import flowShop from "../assets/icons/social/flowShop.svg";
import tiktok from "../assets/icons/social/tiktok.svg";
import twitter from "../assets/icons/social/twitter.svg";
import youtube from "../assets/icons/social/youtube.svg";
import useCheckMobileScreen from "../hook/useCheckMobileScreen";

const AboutShop = () => {
  const isMobile = useCheckMobileScreen();

  const listIconSocial = [cam, tiktok, youtube, twitter, face];
  const contentHotCategories = [
    "Special Offers",
    "Performance",
    "T-shirts",
    "Underwear",
    "Top Brands",
    "Online Exclusive",
  ];
  const contentCustomerService = [
    "Privacy Policy",
    "Refund Policy",
    "Shipping & Return",
    " Term & Conditions",
    "Advanced Search",
    "Theme FAQs",
    "Store Locations",
  ];
  return (
    <Container>
      {!isMobile ? (
        <Row>
          <Col md={3}>
            <Row>
              <Col
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "30px",
                }}
              >
                <Image src={logo} />
              </Col>
              <Col xs={12}>
                <span style={{ textAlign: "left", display: "block" }}>
                  268 St, South New York/NY 98944, United States +222-1800-2628
                  blueskytechcompany@gmail.com
                </span>
              </Col>
              <Col xs={12}>
                <ListSocialStyled>
                  {listIconSocial.map((icon) => (
                    <IconSocialStyled key={icon} src={icon} />
                  ))}
                </ListSocialStyled>
              </Col>
              <Col xs={12} style={{ marginTop: "20px" }}>
                <Image src={flowShop} />
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <Row>
              <Col xs={12}>
                <TitleStyled>Hot Categories</TitleStyled>
              </Col>
              {contentHotCategories.map((item, index) => (
                <SpanStyled key={index}>{item}</SpanStyled>
              ))}
            </Row>
          </Col>
          <Col md={2}>
            <Row>
              <Col xs={12}>
                <TitleStyled>Customer Service</TitleStyled>
              </Col>
              {contentCustomerService.map((item, index) => (
                <SpanStyled key={index}>{item}</SpanStyled>
              ))}
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col xs={12}>
                <TitleStyled>Sign Up to Newsletter</TitleStyled>
              </Col>
              <Col xs={12}>
                <p style={{ textAlign: "left", margin: "0" }}>
                  Enter your email address to get $10 off your first order and
                  free shipping. Updates information on Sales and Offers.
                </p>
              </Col>
              <Col xs={12} style={{ marginTop: "25px" }}>
                <Row>
                  <Col xs={8}>
                    <InputEmail placeholder="Enter your Email ..." />
                  </Col>
                  <Col xs={3}>
                    <BtnSubmit>SUBSCRIBE</BtnSubmit>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <Image src={logo} />
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginBottom: "30px",
                    }}
                  >
                    <Image src={logo} />
                  </Col>
                  <Col xs={12}>
                    <span style={{ textAlign: "left", display: "block" }}>
                      268 St, South New York/NY 98944, United States
                      +222-1800-2628 blueskytechcompany@gmail.com
                    </span>
                  </Col>
                  <Col xs={12}>
                    <ListSocialStyled>
                      {listIconSocial.map((icon) => (
                        <IconSocialStyled key={icon} src={icon} />
                      ))}
                    </ListSocialStyled>
                  </Col>
                  <Col xs={12} style={{ marginTop: "20px" }}>
                    <Image src={flowShop} />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                <TitleStyled>Hot Categories</TitleStyled>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  {contentHotCategories.map((item, index) => (
                    <SpanStyled key={index}>{item}</SpanStyled>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <TitleStyled>
                  <TitleStyled>Customer Service</TitleStyled>
                </TitleStyled>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  {contentCustomerService.map((item, index) => (
                    <SpanStyled key={index}>{item}</SpanStyled>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                <TitleStyled>
                  <TitleStyled>
                    {" "}
                    <TitleStyled>Sign Up to Newsletter</TitleStyled>
                  </TitleStyled>
                </TitleStyled>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xs={12}>
                    <p style={{ textAlign: "left", margin: "0" }}>
                      Enter your email address to get $10 off your first order
                      and free shipping. Updates information on Sales and
                      Offers.
                    </p>
                  </Col>
                  <Col xs={12} style={{ marginTop: "25px" }}>
                    <Row>
                      <Col xs={8}>
                        <InputEmail placeholder="Enter your Email ..." />
                      </Col>
                      <Col xs={3}>
                        <BtnSubmit>SUBSCRIBE</BtnSubmit>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}

      {/*  mobile */}
    </Container>
  );
};

export default AboutShop;
