import React from "react";
import { Link } from "react-router-dom";

export const Producto = (props) => {
  let { nombre, id } = props;
  
  return (
    <div>
      <Link className="link" to={`/detalleProducto/${id}`}>
        <div className="pais_contenedor">
          
          <div>
            <h3>{nombre}</h3>
            
          </div>
        </div>
      </Link>
    </div>
  );
};
