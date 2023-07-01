'use client'
import { SubMenu } from "@/components/Submenu/submenu";
import url from '../../../public/api/cars.json';
import { useEffect, useState } from "react";
import {Carousel} from '../../components/Carousel/carousel';
export default function Cars(){

//   const[listCars,setListCars] = useState([]);


//  async function getDate(){
//     const response = await fetch('api/cars.json');
//     const data = await response.json();
//     setListCars(data);
//   }

//   useEffect(() => {
//     getDate();
//   },[])
  return (
    <div>
     <SubMenu/>
     <Carousel/>
    </div>
  )
}