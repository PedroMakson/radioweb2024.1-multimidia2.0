'use client'

import { useContext } from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';
import { HomeContext } from '@/app/context/HomeContext'; // Usando o alias
import { musics } from '@/app/dados/music'; // Usando o alias

export default function Home() {
  const { playing, configPlayPause, changeTrack, currentTrack } = useContext(HomeContext);

  // Função para mudar para a próxima música
  const nextTrack = () => {
    const currentIndex = musics.findIndex((music) => music.name === currentTrack?.name);
    const nextIndex = (currentIndex + 1) % musics.length;
    changeTrack(musics[nextIndex]);
  };

  // Função para mudar para a música anterior
  const prevTrack = () => {
    const currentIndex = musics.findIndex((music) => music.name === currentTrack?.name);
    const prevIndex = (currentIndex - 1 + musics.length) % musics.length;
    changeTrack(musics[prevIndex]);
  };

  return (
    <main className="flex min-h-screen">
      {/* Reprodutor Fixo no Lado Esquerdo e Centralizado */}
      <div className="w-2/3 bg-gray-900 text-white p-4 fixed top-0 left-0 h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          {currentTrack && (
            <div className="mb-4">
              <img src={currentTrack.singleCover} alt={currentTrack.name} className="w-40 h-40 object-cover mb-3 mx-auto" />
              <h2 className="text-xl font-bold">{currentTrack.name}</h2>
              <p className="text-lg text-gray-400">{currentTrack.author}</p>
            </div>
          )}
          <div className="flex items-center">
            <button onClick={prevTrack} className="p-2">
              <FaBackward className="text-3xl text-gray-400 hover:text-gray-600" />
            </button>
            <button onClick={configPlayPause} className="mx-4 p-2">
              {playing ? <FaPause className="text-4xl text-tomato" /> : <FaPlay className="text-4xl text-gray-400 hover:text-gray-600" />}
            </button>
            <button onClick={nextTrack} className="p-2">
              <FaForward className="text-3xl text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Lateral com Rolagem no Lado Direito */}
      <aside className="w-1/3 bg-gray-800 text-white p-4 overflow-y-auto h-screen ml-auto">
        <div className="flex flex-col space-y-4">
          {musics.map((music) => (
            <div
              key={music.name}
              onClick={() => changeTrack(music)}
              className={`flex flex-col cursor-pointer ${currentTrack?.name === music.name ? 'bg-gray-700' : ''
                } p-2 rounded-md`}
            >
              <img src={music.image} alt={music.name} className="w-36 h-36 object-cover rounded-md mb-2 mx-auto" />
              <h2 className="text-lg font-semibold">{music.name}</h2>
              <p className="text-sm">{music.author}</p>
              <p className="text-xs mt-1 text-justify">{music.description}</p>
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
}
