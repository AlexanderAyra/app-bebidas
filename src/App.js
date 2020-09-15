import React from 'react';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas'
import Header from './components/Header';

import CategoriaProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
