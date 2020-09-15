import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext =  createContext()

const ModalProvider = (props) => {

    const [idreceta, setIdreceta] = useState(null)

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