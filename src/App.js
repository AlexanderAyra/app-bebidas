import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
