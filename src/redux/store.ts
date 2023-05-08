import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./users/auth.reducer";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsReducer } from "./products/products.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authManager: authReducer,
  productsManager : productsReducer
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => any = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const storeType = typeof store;
export default store;
