import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

import CategoriaProvider from './context/CategoriaContext'
import RecetasProvider from './context/RecetasContext'

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
        </div>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;
