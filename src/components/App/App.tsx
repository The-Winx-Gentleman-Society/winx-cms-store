import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewsLetter from "../NewsLetter/NewsLetter";
import SliderProducts from "../SliderProducts/SliderProducts";
import Slider from "../Slider/Slider";

import { products } from "../../products";

import styles from "./App.module.css";

function App() {
  const bannerList = {
    cardHeight: "400px",
    quantityPerPage: 1,
    items: [
      "black",
      "white",
      "red"
    ]
  }
  
  const productList = {
    cardHeight: "auto",
    quantityPerPage: 4,
    items: products
  }

  return (
    <div className={styles["aplication--container"]}>
      <Header />
      <div className={styles["aplication--content"]}>
        <Slider list={bannerList} />
        <br/>
        <SliderProducts list={productList} />
        <br/>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App;