import React from "react";

import './App.css';
import { Routes, Route ,Link } from "react-router-dom";
import Home from './componentes/Home'
import DetalleProducto from './componentes/DetalleProducto'
import CrearProducto from './componentes/CrearProducto'




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
            <div >
              <Link className="link-app" to={"/"}>HOME</Link>
              <DetalleProducto />
            </div>
          }
        />
        <Route
          path="/crearProducto"
          element={
            <div >
              <Link className="link-app" to={"/"}>HOME</Link>

              <CrearProducto/>
            </div>
          }
        />

      </Routes>
    
    </div>
  );
}

export default App;
