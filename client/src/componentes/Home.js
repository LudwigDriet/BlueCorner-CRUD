import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getProductos} from '../redux/actions'
import { Producto } from './Producto';


export default function Home() {
    const dispatch = useDispatch()

    

    const productos = useSelector(state => state.productos)

    useEffect(()=>{
        dispatch(getProductos())
    },[])

    console.log(productos)
    return (
        <div >
            <h1>Productos</h1>
            <div >
            {!productos?null:productos.map((p) => (
            <div key={p.Id_producto}>
            <Producto
              nombre={p.Nombre}
              id={p.Id_producto}
            />
          </div>
        
        ))}
      </div>
        </div>

    )
}
