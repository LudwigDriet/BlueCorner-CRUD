
import {GET_PRODUCTOS,GET_DETALLE,ADD_ETIQUETA} from './actions'

const initialState = {
   
    productos:[],
    detalle:[],
    etiquetacreada:false,
    
}

export default function Reducer(state=initialState, action){    

    switch (action.type) {
        
        
                case GET_PRODUCTOS:
                    return{
                        ...state,
                        productos: action.payload,
                    }
                case GET_DETALLE:
                    return{
                        ...state,
                        detalle: action.payload,
                    }
                    case ADD_ETIQUETA:
                    return{
                        ...state,
                        etiquetacreada: action.payload,
                    }


          default:
            return state;

}}


