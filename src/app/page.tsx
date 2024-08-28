'use client'

import { useContext } from "react";
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";

export default function Home() {
  const {
     contador,
     incremento
  } = useContext(HomeContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>{contador}</h1>
       <div className="flex flex-row">
       <button onClick={()=> incremento()}>
           {
            (contador === 0) ? 
             (<FaPlusCircle className="text-[50px] text-[tomato]" />) : 
             (<FaMinusCircle />)
           }

       </button>
       <button onClick={()=> incremento()}>
           {
            (contador === 0) ? 
             (<FaPlusCircle className="text-[50px] text-[tomato]" />) : 
             (<FaMinusCircle />)
           }

       </button>
       <button onClick={()=> incremento()}>
           {
            (contador === 0) ? 
             (<FaPlusCircle className="text-[50px] text-[tomato]" />) : 
             (<FaMinusCircle />)
           }

       </button>
       </div>
    </main>
  );
}
