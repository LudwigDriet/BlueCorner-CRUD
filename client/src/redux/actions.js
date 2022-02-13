import axios from "axios";


export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const GET_DETALLE = "GET_DETALLE";
export const ADD_ETIQUETA = "ADD_ETIQUETA";





// Funcion para crear usuario
export function addEtiqueta(payload) {
  return async (dispatch) => {
    try {
      let json = await axios.post(`http://localhost:3001/crearetiqueta`, payload);
       console.log('creando etiqueta',json.data)
       return dispatch({
        type: ADD_ETIQUETA,
        payload: true,
      });
       
    } catch (error) {
      console.log(error);
    }
  };
}



export function getProductos() {
  
  return async (dispatch) => {
    try {
      let json = await axios.get('http://localhost:3001/');
      console.log("getProductos ", json.data);
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
  console.log(id)
  return async (dispatch) => {
    try {
      let json = await axios.get('http://localhost:3001/detalle/'+id);
      console.log("getDetalle ", json.data);
      return dispatch({
        type: GET_DETALLE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


