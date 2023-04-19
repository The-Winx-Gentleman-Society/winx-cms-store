import { useRef, useState } from "react";
import { separateList } from "../../utils/separateList";
import styles from "./SliderProducts.module.css";

type SliderProps = {
  list: ListProps;
};

type ListProps = {
  items: any;
  quantityPerPage: number;
  cardHeight: string;
};

type ItemsProps = {
  id: number;
  image: string;
  name: string,
  price: number
}

function SliderProducts({ list: { quantityPerPage, items, cardHeight } }: SliderProps) {
  const sliderContainer = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
  const cardsList = quantityPerPage <= 1? [items] : separateList(items, quantityPerPage);

  function handlePrevious() {
    quantityPerPage > 1
    ? setCurrentCard((current) => 
      current !== 0 ? current - 1 : cardsList.length - 1
    )
    : setCurrentCard((current) => 
      current !== 0 ? current - 1 : items.length - 1
    );
  }

  function handleNext() {
    quantityPerPage > 1
    ? setCurrentCard((current) =>
      current !== cardsList.length - 1 ? current + 1 : 0
    )
    : setCurrentCard((current) =>
      current !== items.length - 1 ? current + 1 : 0
    );
  }

  function handleSetImageByDot(index: number) {
    setCurrentCard(index);
  }

  return (
    <div className={styles["shelf-wrapper"]}>
      <div
        className={styles["shelf"]}
        ref={sliderContainer}
        style={{ width: "100%" }}
      >
        {cardsList?.map((card: any, index: number) => (
          quantityPerPage > 1 ? (
            <div
              key={card}
              className={index === currentCard
                ? styles["card--visible"]
                : index > currentCard
                ? styles["card"]
                : styles["card--skip"]
              }
              style={{
                height: cardHeight,
                background: `${card}`,
              }}
            >
              {card?.map((cardItems: ItemsProps) => (
                <div
                  key={cardItems?.id}
                  style={{ width: `${100 / quantityPerPage}%` }}
                  className={styles["subcard"]}
                >
                  <img src={cardItems?.image} alt={cardItems?.name} />
                  <h1>{cardItems?.name}</h1>
                  <small>{cardItems?.price}</small>
                </div>
              ))}
            </div>
          ) : (
            <div
              key={card}
              className={index === currentCard
                ? styles["card--visible"]
                : index > currentCard
                ? styles["card"]
                : styles["card--skip"]
              }
              style={{
                height: cardHeight,
              }}
            >
              <div
                key={card?.id}
                style={{ width: `${100 / quantityPerPage}%` }}
                className={styles["subcard"]}
              >
                <img src={card?.image} alt={card?.name} />
                <h1>{card?.name}</h1>
                <small>{card?.price}</small>
              </div>
            </div>
          )
        ))}
      </div>
      <button className={styles["arrow-left"]} onClick={handlePrevious}>
        {"<"}
      </button>
      <button className={styles["arrow-right"]} onClick={handleNext}>
        {">"}
      </button>
      <div className={styles["dots-container"]}>
        {cardsList.map((dots: any, index: number) =>
          index === currentCard ? (
            <div
              key={dots}
              className={styles["dot--active"]}
              onClick={() => handleSetImageByDot(index)}
            ></div>
          ) : (
            <div
              key={dots}
              className={styles["dot"]}
              onClick={() => handleSetImageByDot(index)}
            ></div>
          )
        )}
      </div>
    </div>
  );
}

export default SliderProducts;
