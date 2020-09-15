import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
    const [recetas, setRecetas] = useState([])
    const [busqueda, buscarReceta] = useState({
        nombre: '',
        categoria: ''
    })
    const [consultar, setConsultar] = useState(false)

    const { nombre, categoria } = busqueda

    useEffect(() => {

        if (consultar) {
            const getRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

                const resultado = await axios(url)

                // console.log(resultado.data.drinks)
                setRecetas(resultado.data.drinks)
            }
            getRecetas()
        }
    }, [busqueda])

    return(
        <RecetasContext.Provider
            value={{
                buscarReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider