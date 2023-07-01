'use client'
import { SubMenu } from "@/components/Submenu/submenu";
import {Carousel} from '../../components/Carousel/carousel';
import { useEffect, useRef, useState } from "react";

export default function Cars(){
  const [listCars, setListCars] = useState([]);
  const carousel = useRef(null);

  async function getDate() {
    const response = await fetch("api/cars.json");
    const data = await response.json();
    setListCars(data);
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
     <SubMenu listCars={listCars} setListCars={setListCars}/>
     <Carousel carousel={carousel} listCars={listCars}/>
    </div>
  )
}