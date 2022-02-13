import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { addEtiqueta, getDetalle } from "../redux/actions";

import { Link } from "react-router-dom";

export default function DetalleProducto() {
  const dispatch = useDispatch()
  let params = useParams();
  const detalle = useSelector(state => state.detalle)
  const productos = useSelector(state => state.productos)
  const creada = useSelector(state => state.etiquetacreada)

  let producto = productos.find(p=> p.Id_producto = params )

  

  const [detalleProducto, setdetalleProducto] = useState([]);
  const [etiqueta, setetiqueta] = useState('');
  const [etiquetas, setetiquetas] = useState([]);



  useEffect(() => {
    
   dispatch(getDetalle(params.idProducto))
  

  }, [params.idProducto]);

  useEffect(() => {
    if(detalle){
      setdetalleProducto(detalle)
      
    }
 
   }, [detalle]);


   useEffect(() => {
    if(creada){
      getDetalle(params.idProducto)
      
    }
 
   }, [creada]);

   

   let nuevaEtiqueta = (evento) => {
    evento.preventDefault();
    if(etiqueta){
      dispatch(addEtiqueta({nombre:etiqueta,id_producto:params.idProducto}))
    }
  };
  let cambio = (evento) => {
    evento.preventDefault();
    setetiqueta(
         evento.target.value);
  };
   
   
  console.log('etiquetas...',etiqueta)

  return (
    <div className="detalle_contenedorgeneral">
      <div className="detalle_contenedor">
        <div className="detalle_bandera">
          
          <div>
            <h2>Producto: {producto?.Nombre}</h2>
            
          </div>
        </div>
        <div className="detalle_bandera">
          <div>
            <h2 style={{ marginLeft: "10px", marginRight: "10px" }}>
              Etiquetas :
            </h2>
          </div>
          {detalleProducto.length
            ? detalleProducto.map((etiqueta, i) => {
                return (
                  <div key={i} className="detalle_actividad">
                    <h3>{etiqueta.Nombre}</h3>
                    
                  </div>
                );
              })
            : "Este producto aun no tiene etiquetas"}
          <div>
            <form  onSubmit={nuevaEtiqueta}>
            <label htmlFor="etiqueta">Nueva Etiqueta </label>
            <input
          id="etiqueta"
          type="text"
          placeholder="Nombre de la etiqueta"
          name="etiqueta"
          value={etiqueta}
          onChange={(evento) => cambio(evento)}
          />
          <button className="boton_formulario">Crear</button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
