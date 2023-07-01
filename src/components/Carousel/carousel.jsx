'use client'
import { useEffect, useState,useRef } from 'react';
import styles from './carousel.module.scss';
import { Info } from '../Info/info';


export function Carousel(){

  const[listCars,setListCars] = useState([]);

  const carousel  = useRef(null);
  async function getDate(){
     const response = await fetch('api/cars.json');
     const data = await response.json();
     setListCars(data);
   }
 
   useEffect(() => {
     getDate();
   },[])


   const handleLeftClick = (e) =>{
      e.preventDefault();
      console.log(carousel.current.offsetWidth)
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
   }
 const  handleRightClick = (e) =>{
  e.preventDefault();
  console.log(carousel.current.offsetWidth)
  carousel.current.scrollLeft += carousel.current.offsetWidth;
   }

  return (
    <div className={styles.container}> 
      {/* <div className={styles.logo}>
      Volvo
      </div> */}

      <div ref={carousel} className={styles.carousel}>
      {listCars.map((car) => {
        const {id,modelName,bodyType,modelType,imageUrl} = car;
        
        return(
            <div key={id} className={styles.item}>
              <Info bodyType={bodyType} modelName={modelType}/>
            <div className={styles.image}>
            <img src={imageUrl} alt="carros" />
            </div>
    
            <div className={styles.info}>
                <span className={styles.name}>carro 1</span>
                <span className={styles.oldPrice}>51555</span>
                <span className={styles.price}>6566656</span>
            </div>
          </div>
         )
      })}
      </div>

      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>{'<'} </button>
        <button onClick={handleRightClick}>{'>'}</button>
      </div>
    </div>
  )
}
