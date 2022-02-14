import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { addEtiqueta, getDetalle ,getProductos,creadaReset,deleteEtiqueta,eliminaretiquetaReset} from "../redux/actions";

import './DetalleProducto.css'

export default function DetalleProducto() {
  const dispatch = useDispatch()
  let params = useParams();
  const detalle = useSelector(state => state.detalle)
  const productos = useSelector(state => state.productos)
  const creada = useSelector(state => state.etiquetacreada)
  const eliminada = useSelector(state => state.etiquetaeliminada)


  let producto = productos.find(p=> p.Id_producto === parseInt(params.idProducto) )



  const [detalleProducto, setdetalleProducto] = useState([]);
  const [etiqueta, setetiqueta] = useState('');
  


  useEffect(()=>{
    dispatch(getProductos())
},[dispatch])

  useEffect(() => {
   
    
   dispatch(getDetalle(params.idProducto))
  

  }, [params.idProducto,dispatch]);

  useEffect(() => {
    if(detalle){
      setdetalleProducto(detalle)
      
    }
 
   }, [detalle,dispatch]);


   useEffect(() => {
    if(creada){
     
      dispatch(getDetalle(params.idProducto))
      dispatch(creadaReset())
      setetiqueta('')

    }
    else if(eliminada){
      dispatch(getDetalle(params.idProducto))
      dispatch(eliminaretiquetaReset())

    }
 
   }, [creada,eliminada,dispatch,params.idProducto]);

   

   let nuevaEtiqueta = (evento) => {
     let etiquetaverificada = etiqueta.charAt(0).toUpperCase() + etiqueta.slice(1).toLocaleLowerCase()
    evento.preventDefault();
    let encontrado = detalle.find((et)=>et.Nombre === etiquetaverificada)
   
    if(encontrado){
      alert('este producto ya tiene esta etiqueta')
    }
    else if(etiquetaverificada.trim() !== ""){
      if(etiquetaverificada.length <= 50){

        dispatch(addEtiqueta({nombre:etiquetaverificada,id_producto:params.idProducto}))
      }
      else{
        alert('el nombre de la etiqueta no puede tener mas de 50 caracteres')
      }
    }
    else{
      alert('la etiqueta no puede estar vacia')
    }
  };

  let cambio = (evento) => {
    evento.preventDefault();
    setetiqueta(
         evento.target.value);
  };
   
   let eliminarEtiqueta = (id)=>{
    
    dispatch(deleteEtiqueta(id))
   }


  return (
    
      <div className="detalle-producto">
            
              <h1>{producto?.Nombre}</h1>
              
            <div >
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
                          <button className="detalle-boton" >Crear</button>
                        </form>
                  </div>
                    <h2 style={{textAlign:'left', marginLeft:'5%'}}>Etiquetas :</h2>
                  <div>
                        {detalleProducto.length
                          ? detalleProducto.map((etiqueta, i) => {
                              return (
                                <div key={i} className='formulario-detalle' >
                                  <h3>{etiqueta.Nombre}</h3> 
                                  <p value={etiqueta.Id_etiqueta} onClick={()=>eliminarEtiqueta(etiqueta.Id_etiqueta)} className='x-detalle'>x</p>
                                </div>
                              );
                            })
                          : "Este producto aun no tiene etiquetas"}
                    </div>
                  <div>
                  </div>
            </div>
        
      </div>
    
  );
};
