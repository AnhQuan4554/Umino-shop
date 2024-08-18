import { Image } from "react-bootstrap";
import starRate from "../../assets/img/product/rate.png";
import {
  Color,
  ListColorStyled,
  ProductNameStyled,
  ProductOldPriceStyled,
  ProductPriceStyled,
  StarRateStyled,
  WrapArrivalsInforStyled,
  WrapColorStyled,
} from "../../styles/Product";

export const NewArrivalsInfor = ({ name, price, oldPrice, listColor }) => {
  return (
    <WrapArrivalsInforStyled id="WrapArrivalsInforStyled">
      <ProductNameStyled>{name}</ProductNameStyled>
      <StarRateStyled>
        <Image style={{ height: "100%" }} src={starRate} />
      </StarRateStyled>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProductPriceStyled oldPrice={oldPrice}>{price}</ProductPriceStyled>
        <ProductOldPriceStyled>{oldPrice}</ProductOldPriceStyled>
      </div>
      <ListColorStyled>
        {listColor &&
          listColor.map((item, index) => (
            <WrapColorStyled key={index} borderColor={item.borderColor}>
              <Color backGroup={item.backGroud} />
            </WrapColorStyled>
          ))}
      </ListColorStyled>
    </WrapArrivalsInforStyled>
  );
};
