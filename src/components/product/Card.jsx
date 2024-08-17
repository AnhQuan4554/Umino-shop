import {
  CartButtonStyled,
  FeaturedCardStyled,
  LableOutOfStock,
  WrapCard,
} from "../../styles/Product";

const Card = ({ imgUrl, buttonTitle, lable }) => {
  return (
    <WrapCard>
      <FeaturedCardStyled src={imgUrl} />
      {buttonTitle && <CartButtonStyled>{buttonTitle}</CartButtonStyled>}
      <LableOutOfStock>{lable}</LableOutOfStock>
    </WrapCard>
  );
};

export default Card;
