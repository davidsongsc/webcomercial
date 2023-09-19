import { combineReducers } from "redux";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    user: userReducer, // Renomeei a chave para "user" para tornar o acesso mais claro
});

export default rootReducer;