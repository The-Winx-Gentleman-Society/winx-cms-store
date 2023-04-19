import { useEffect, useRef, useState } from "react";
import { separateList } from "../../utils/separateList";
import styles from "./Slider.module.css";

type SliderProps = {
  list: ListProps;
};

type ListProps = {
  items: any;
  quantityPerPage: number;
  cardHeight: string;
};

function Slider({ list: { quantityPerPage, items, cardHeight } }: SliderProps) {
  const sliderContainer = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [cardsList, setCardsList] = useState([items]);

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

  useEffect(() => {
    if (quantityPerPage <= 1) return setCardsList(items);

    const separatedItems = separateList(items, quantityPerPage);

    setCardsList(separatedItems);
  }, []);

  return (
    <div className={styles["shelf-wrapper"]}>
      <div
        className={styles["shelf"]}
        ref={sliderContainer}
        style={{ width: "100%" }}
      >
        {cardsList?.map((card: any, index: number) => (
          quantityPerPage > 1 ? (
            index === currentCard ? (
              <div
                key={card}
                className={styles["card--visible"]}
                style={{
                  height: cardHeight,
                  background: `${card}`,
                }}
              >
                {card?.map((cardItems: any) => (
                    <div
                      key={cardItems}
                      style={{ width: `${100 / quantityPerPage}%`, background: `${cardItems}` }}
                    ></div>
                  ))}
              </div>
            ) : index > currentCard ? (
              <div
                key={card}
                className={styles["card"]}
                style={{
                  height: cardHeight,
                  background: `${card}`,
                }}
              >
                {card?.map((cardItems: any) => (
                  <div
                    key={cardItems}
                    style={{ width: `${100 / quantityPerPage}%`, background: `${cardItems}` }}
                  ></div>
                ))}
              </div>
            ) : (
              <div
                key={card}
                className={styles["card--skip"]}
                style={{
                  height: cardHeight,
                  background: `${card}`,
                }}
              >
                {card?.map((cardItems: any) => (
                  <div
                    key={cardItems}
                    style={{ width: `${100 / quantityPerPage}%`, background: `${cardItems}` }}
                  ></div>
                ))}
              </div>
            )
          ) : index === currentCard ? (
            <div
              key={card}
              className={styles["card--visible"]}
              style={{
                height: cardHeight,
                background: `${card}`,
              }}
            ></div>
          ) : index > currentCard ? (
            <div
              key={card}
              className={styles["card"]}
              style={{
                height: cardHeight,
                background: `${card}`,
              }}
            ></div>
          ) : (
            <div
              key={card}
              className={styles["card--skip"]}
              style={{
                height: cardHeight,
                background: `${card}`,
              }}
            ></div>
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

export default Slider;
