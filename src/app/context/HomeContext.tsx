'use client'

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Music } from '@/app/dados/music'; // Usando o alias

type HomeContextData = {
    playing: boolean;
    currentTrack: Music | null;
    configPlayPause: () => void;
    changeTrack: (track: Music) => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({ children }: ProviderProps) => {
    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [currentTrack, setCurrentTrack] = useState<Music | null>(null);

    useEffect(() => {
        if (currentTrack) {
            if (audio) {
                audio.pause();
            }
            const newAudio = new Audio(currentTrack.urlAudio);
            setAudio(newAudio);

            if (playing) {
                newAudio.play();
            }
        }
    }, [currentTrack]);

    const configPlayPause = () => {
        if (!audio) return;

        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const changeTrack = (track: Music) => {
        if (audio) {
            audio.pause();
        }
        setCurrentTrack(track);
        setPlaying(true); // Inicia a reprodução ao mudar de faixa
    };

    return (
        <HomeContext.Provider value={{
            playing,
            currentTrack,
            configPlayPause,
            changeTrack
        }}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;
