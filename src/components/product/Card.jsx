import {
  CartButtonStyled,
  FeaturedCardStyled,
  LableDiscountStyled,
  LableOutOfStockStyled,
  WrapCard,
  WrapLableArrivalsStyled,
} from "../../styles/Product";

const Card = ({ imgUrl, buttonTitle, lable, backGroud, discount }) => {
  return (
    <WrapCard>
      <FeaturedCardStyled src={imgUrl} />
      {buttonTitle && <CartButtonStyled>{buttonTitle}</CartButtonStyled>}
      {lable && (
        <WrapLableArrivalsStyled>
          {discount && <LableDiscountStyled>{discount}</LableDiscountStyled>}
          <LableOutOfStockStyled backGroud={backGroud}>
            {lable}
          </LableOutOfStockStyled>
        </WrapLableArrivalsStyled>
      )}
    </WrapCard>
  );
};

export default Card;
