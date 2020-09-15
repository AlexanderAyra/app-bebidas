import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext =  createContext()

const ModalProvider = (props) => {

    const [idreceta, setIdreceta] = useState(null)
    const [receta, setReceta] = useState({})

    useEffect(() => {

        const getReceta = async () => {
            if(!idreceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`

            const respuesta = await axios.get(url)

            setReceta(respuesta.data.drinks[0])
        }
        getReceta()
        
    },[idreceta])

    return(
        <ModalContext.Provider
            value={{
                setIdreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider