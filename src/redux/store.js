import { createStore, applyMiddleware } from "redux"; // Certifique-se de que a importação está correta
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(logger)); // Use parênteses () para chamar a função createStore

export default store;
