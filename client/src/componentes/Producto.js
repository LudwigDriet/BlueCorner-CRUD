import React from "react";
import { Link } from "react-router-dom";
import './Producto.css'

export const Producto = (props) => {
  let { nombre, id } = props;
  
  return (
    <div>
      <Link  className="link-letra-producto" to={`/detalleProducto/${id}`}>
        <div>
          
          <div>
            <h3>{nombre}</h3>
            
          </div>
        </div>
      </Link>
    </div>
  );
};
