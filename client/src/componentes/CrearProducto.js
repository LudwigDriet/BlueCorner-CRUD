import React,{useState,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addProducto,productoReset} from '../redux/actions'
import './CrearProducto.css'


export default function CrearProducto() {
  const dispatch = useDispatch()
	const navigate = useNavigate()

  const productocreado = useSelector(state => state.productocreado)
  
  const [producto,setproducto]=useState('')
  const [etiqueta,setetiqueta]=useState('')
  const [etiquetas,setetiquetas]=useState([])


  useEffect(()=>{
    if(productocreado){
      alert('producto creado con exito')
      dispatch(productoReset())
       navigate('/')
    }

  },[productocreado,dispatch,navigate])


  let agregaretiqueta = (evento)=>{

      let etiqueta = evento.charAt(0).toUpperCase() + evento.slice(1).toLocaleLowerCase()

      if(etiqueta.length>50){
          alert('el nombre de la etiqueta no puede tener mas de 50 caracteres')
      }
      else if(etiqueta.trim() !== ""){

            if(etiquetas.indexOf(etiqueta) === -1){
        
              setetiquetas(
                [...etiquetas,etiqueta]
              )
              setetiqueta('')
            }
            else{
        
              alert('este producto ya tiene esta etiqueta')
            }
      }
      else{
        alert('la etiqueta no puede estar vacia')
      }
  }

  let eliminaretiqueta = (evento)=>{
   
    setetiquetas(
      etiquetas.filter((i) => i !== evento)
    )
    
  }

  let enviarProducto = (evento)=>{
      evento.preventDefault();
      if(producto.length>50){
        alert('el nombre del producto no puede tener mas de 50 caracteres')
      }
      else if (producto.trim() === ""){
        alert('el nombre del producto no puede estar vacio')

       }
      else{

        dispatch(addProducto({nombre:producto,
          etiquetas:etiquetas
            }))
      }
    
  }
  
  
  return (
    <div >

        <div className='contenedor-formuario'>
            <h2>Crea un nuevo producto</h2>
              <form onSubmit={enviarProducto} >
                 <div >
                      <label htmlFor="producto">Producto </label>
                      <input
                        id="producto"
                        type="text"
                        placeholder="Nombre del producto"
                        name="producto"
                        value={producto}
                        onChange={(evento) => setproducto(evento.target.value)}
                    />
                </div>
                <h2>Agregar etiquetas</h2>
                  <div className='agregar-etiqueta'>
                      <div >
                      <label htmlFor="etiqueta">Etiqueta </label>
                      <input
                        id="etiqueta"
                        type="text"
                        placeholder="Nombre de la etiqueta"
                        name="etiqueta"
                        value={etiqueta}
                        onChange={(evento) => setetiqueta(evento.target.value)}
                      />
                      </div>
                    <div>
                        <p onClick={()=>agregaretiqueta(etiqueta) } className='agregar-boton'>Agregar etiqueta</p>
                    </div>
                  </div>
                   <div>
                        {etiquetas.length
                          ? etiquetas.map((etiqueta, i) => {
                          return (
                            <div key={i} className='formulario' >
                                <h3>{etiqueta}</h3> <p onClick={()=>eliminaretiqueta(etiqueta)} className='x'>x</p>
                                
                              </div>
                            );
                          })
                          : "Este producto aun no tiene etiquetas"
                        }
                    </div>
                    <button className='crear'>Crear</button>
              </form>
          </div>

    </div>
  );
};
