import React, { createContext, useState } from 'react'

export const CategoriaContext = createContext()

const CategoriaProvider = (props) => {
    
    const [hola, setHola] = useState('hola')

    return(
        <CategoriaContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

 export default CategoriaProvider