import AboutShop from "../components/AboutShop";
import Carousels from "../components/Carousels";
import Header from "../components/Header";
import Product from "../components/product";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousels />
      <Product />
      <AboutShop />
    </div>
  );
};

export default Home;
