import axios from "axios";
import { AppDispatch } from "../store";
import { CartProductProps } from "./cartTypes";
import * as types from "./carts.types";

const cartProductsLoading = () => ({ type: types.CART_PRODUCTS_LOADING });
const cartProductsError = () => ({ type: types.CART_PRODUCTS_ERROR });

const getCartProductsSuccess = (payload: CartProductProps[]) => ({
  type: types.CART_GET_PRODUCTS_SUCCESS,
  payload,
});

// APIs
let url = process.env.REACT_APP_URL1;
export const getProductsApi =
  (path: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.get(`${url}/${path}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(getCartProductsSuccess(res.data.data));
      } else {
        dispatch(cartProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(cartProductsError());
    }
  };
