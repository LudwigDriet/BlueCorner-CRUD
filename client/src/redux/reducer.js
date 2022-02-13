
import {GET_PRODUCTOS,GET_DETALLE,ADD_ETIQUETA,RESET_CREADA,DELETE_ETIQUETA,RESET_ELIMINAR_ETIQUETA,
    DELETE_PRODUCTO,RESET_ELIMINAR_PRODUCTO,ADD_PRODUCTO,RESET_PRODUCTO} from './actions'

const initialState = {
   
    productos:[],
    detalle:[],
    etiquetacreada:false,
    etiquetaeliminada:false,
    productoeliminado:false,
    productocreado:false
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
                    case RESET_CREADA:
                    return{
                        ...state,
                        etiquetacreada: action.payload,
                    }
                    case DELETE_ETIQUETA:
                    return{
                        ...state,
                        etiquetaeliminada: action.payload,
                    }
                    case RESET_ELIMINAR_ETIQUETA:
                    return{
                        ...state,
                        etiquetaeliminada: action.payload,
                    }
                    case DELETE_PRODUCTO:
                    return{
                        ...state,
                        productoeliminado: action.payload,
                    }
                    case RESET_ELIMINAR_PRODUCTO:
                    return{
                        ...state,
                        productoeliminado: action.payload,
                    }

                    case ADD_PRODUCTO:
                    return{
                        ...state,
                        productocreado: action.payload,
                    }
                    case RESET_PRODUCTO:
                    return{
                        ...state,
                        productocreado: action.payload,
                    }


          default:
            return state;

}}


