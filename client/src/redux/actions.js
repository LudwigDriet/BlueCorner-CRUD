import axios from "axios";


export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const GET_DETALLE = "GET_DETALLE";
export const ADD_ETIQUETA = "ADD_ETIQUETA";
export const RESET_CREADA = "ADD_ETIQUETA";
export const DELETE_ETIQUETA = "DELETE_ETIQUETA";
export const RESET_ELIMINAR_ETIQUETA = "RESET_ELIMINAR_ETIQUETA";
export const DELETE_PRODUCTO = "DELETE_PRODUCTO";
export const RESET_ELIMINAR_PRODUCTO = "RESET_ELIMINAR_PRODUCTO";
export const ADD_PRODUCTO = "ADD_PRODUCTO";
export const RESET_PRODUCTO = "RESET_PRODUCTO";





export function addEtiqueta(payload) {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/crearetiqueta`, payload);
   
       return dispatch({
        type: ADD_ETIQUETA,
        payload: true,
      });
       
    } catch (error) {
      console.log(error);
    }
  };
}

export function addProducto(payload) {
  
 
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/crearproducto`, payload);
       
       return dispatch({
        type: ADD_PRODUCTO,
        payload: true,
      });
       
    } catch (error) {
      console.log(error);
    }
  };
}
export function productoReset() {
  return { type: RESET_PRODUCTO, payload: false };
}

export function creadaReset() {
  return { type: RESET_CREADA, payload: false };
}


export function getProductos() {
  
  return async (dispatch) => {
    try {
      let json = await axios.get('http://localhost:3001/');
      
      return dispatch({
        type: GET_PRODUCTOS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetalle(id) {
  
  return async (dispatch) => {
    try {
      let json = await axios.get('http://localhost:3001/detalle/'+id);
      
      return dispatch({
        type: GET_DETALLE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteEtiqueta(id) {
 
  return async (dispatch) => {
    try {
      await axios.delete('http://localhost:3001/etiquetasdelete/'+id);
     
      return dispatch({
        type: DELETE_ETIQUETA,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function eliminaretiquetaReset() {
  return { type: RESET_ELIMINAR_ETIQUETA, payload: false };
}

export function deleteProducto(id) {
 
  return async (dispatch) => {
    try {
      await axios.delete('http://localhost:3001/productodelete/'+id);
     
      return dispatch({
        type: DELETE_PRODUCTO,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function eliminadarproductoReset() {
  return { type: RESET_ELIMINAR_PRODUCTO, payload: false };
}
