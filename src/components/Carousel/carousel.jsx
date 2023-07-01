"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./carousel.module.scss";
import { Info } from "../Info/info";
import { Links } from "../Links/links";
import { ButtonsNavigator } from "../ButtonsNavigator/navigator";
import Image from "next/image";


export function Carousel({carousel,listCars}) {
  // const [listCars, setListCars] = useState([]);
  // const carousel = useRef(null);

  // async function getDate() {
  //   const response = await fetch("api/cars.json");
  //   const data = await response.json();
  //   setListCars(data);
  // }

  // useEffect(() => {
  //   getDate();
  // }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className={styles.container}>
      <div ref={carousel} className={styles.carousel}>
        {listCars.map((car) => {
          const { id, modelName, bodyType, modelType, imageUrl, price } = car;

          return (
            <div key={id} className={styles.item}>
              <Info
                bodyType={bodyType}
                modelName={modelName}
                modelType={modelType}
                price={price}
              />
              <div
                style={{
                  position: "relative",
                }}
                className={styles.image}
              >
                <div className={styles.badge}>Disponível online</div>
                <Image
                  width={280}
                  height={220}
                  src={imageUrl}
                  alt={modelName}
                  priority
                />
              </div>
              <Links id={id}/>
            </div>
          );
        })}
      </div>
      <ButtonsNavigator carousel={carousel} />
    </div>
  );
}
