'use client'

import { useContext } from "react";
import {FaPlusCircle, FaMinusCircle, FaPlay, FaPause} from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";
import {musics} from "./dados/music";

export default function Home() {
  const {
     playing,
     configPlayPause
  } = useContext(HomeContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>{playing}</h1>
       <div className="flex flex-row">
       <button onClick={()=> configPlayPause()}>
           {
            (playing) ? 
             (<FaPause className="text-[50px] text-[tomato]" />) : 
             (<FaPlay />)
           }
           <div>
              {
                musics.map(music => {
                  return (
                    <div>
                      <h1>
                          {music.author}
                      </h1>
                    </div>
                  )
                })
              }
           </div>
       </button>
       </div>
    </main>
  );
}
