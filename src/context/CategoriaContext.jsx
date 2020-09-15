import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoriaContext = createContext()

const CategoriaProvider = (props) => {
    
    // crear el state del context
    const [categorias, setCategorias] = useState([])    

    // ejectar el llamado a esta api

    useEffect(() => {
        const getCategorias = async () => {
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)
            setCategorias(categorias.data.drinks);

        }
        
        getCategorias()

    }, [])


    return(
        <CategoriaContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

 export default CategoriaProvider