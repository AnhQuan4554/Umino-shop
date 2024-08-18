import { Button, Image, Row } from "react-bootstrap";
import styled from "styled-components";

export const ListSocialStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const IconSocialStyled = styled(Image)`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const RowAboutShopStyled = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitleStyled = styled.h3`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
  text-align: left;
`;
export const SpanStyled = styled.span`
  margin-bottom: 20px;
  font-size: 16px;
  color: #555555;
  text-align: left;
`;
export const InputEmail = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  color: #999999;
`;
export const BtnSubmit = styled(Button)`
  width: 150px;
  height: 50px;
  background-color: #111111;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 576px) {
    width: 70px;
    background-color: #111111;
    border-radius: 20px;
    font-size: 10px;
  }
`;
