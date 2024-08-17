import { WrapLayoutProduct } from "../../styles/Product";
import FeaturedCollections from "./FeaturedCollections";
import NewArrivals from "./NewArrivals";

const Product = () => {
  return (
    <WrapLayoutProduct>
      <FeaturedCollections />
      <NewArrivals />
    </WrapLayoutProduct>
  );
};
export default Product;
