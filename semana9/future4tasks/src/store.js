import { createStore, applyMiddleware} from "redux";
import rootReducer from "./Reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

render (
    <Provider store={store}>
        <App/>
    </Provider>
)