import { createStore } from "redux"; // Certifique-se de que a importação está correta

import rootReducer from "./root-reducer";

const store = createStore(rootReducer); // Use parênteses () para chamar a função createStore

export default store;
