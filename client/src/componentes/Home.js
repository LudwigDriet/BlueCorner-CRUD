import React,{useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {getProductos,deleteProducto,eliminadarproductoReset} from '../redux/actions'
import  Producto  from './Producto';
import './Home.css'


export default function Home() {
    const dispatch = useDispatch()

    const productos = useSelector(state => state.productos)
    const productoeliminado = useSelector(state => state.productoeliminado)

    useEffect(()=>{
        dispatch(getProductos())
    },[dispatch])

    useEffect(()=>{
      if(productoeliminado){
        dispatch(getProductos())
        dispatch(eliminadarproductoReset())

      }
    },[dispatch,productoeliminado])

    let eliminarProducto = (id)=>{
      dispatch(deleteProducto(id))
     }


    return (
        <div >
            <h1>Productos</h1>
            <Link className='link-letra-home' to={"/crearProducto"}>Crear Producto</Link>
           
            <div className='listado' >
                  {!productos?null:productos.map((p) => (
                  <div className='producto' key={p.Id_producto}>
                      <Producto className='pro'
                        nombre={p.Nombre}
                        id={p.Id_producto}
                      />
                      <p value={p.Id_producto} onClick={()=>eliminarProducto(p.Id_producto)} className='x-home'>x</p>
                </div>
                
              ))}
            </div>
        </div>

    )
}
