'use client'

import React, {createContext, ReactNode, useState} from 'react';

type HomeContextData = {
    contador: number;
    incremento: () => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({children}:ProviderProps) => {
    const [contador, setContador] = useState(0);

    const incremento = () => {
       setContador(contador + 1);
    }

    return (
        <HomeContext.Provider value={
            {
                contador,
                incremento
            }
        }>
          {children} 
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;