import React from "react";

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import DetalleProducto from './componentes/DetalleProducto'



function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route
          path="/" element={
          <div>

            <Home/>

          </div>
        } />

        <Route
          path="/detalleProducto/:idProducto"
          element={
            <div className="link-div">
              
              <DetalleProducto />
            </div>
          }
        />

      </Routes>
    
    </div>
  );
}

export default App;
