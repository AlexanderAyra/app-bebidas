import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

import CategoriaProvider from './context/CategoriaContext'

function App() {
  return (
    <CategoriaProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriaProvider>
  );
}

export default App;
