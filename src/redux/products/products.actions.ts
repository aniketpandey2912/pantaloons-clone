import axios from "axios";
import { AppDispatch } from "../store";
import { ProductProps } from "./productTypes";
import * as types from "./products.types";

const productsLoading = () => ({ type: types.PRODUCTS_LOADING });
const productsError = () => ({ type: types.PRODUCTS_ERROR });

const getProductsSuccess = (payload: ProductProps[]) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload,
});

// APIs
let url = process.env.REACT_APP_URL1;
export const getProductsApi =
  (path: string) => async (dispatch: AppDispatch) => {
    dispatch(productsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.get(`${url}/${path}`);
      console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(getProductsSuccess(res.data.data));
      } else {
        dispatch(productsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(productsError());
    }
  };
