import axios from "axios";
import { AppDispatch } from "../store";
import { ProductProps } from "./productTypes";
import * as types from "./products.types";
import { url } from "../../utils";

const productsLoading = () => ({ type: types.PRODUCTS_LOADING });
const productsError = () => ({ type: types.PRODUCTS_ERROR });

const getProductsSuccess = (payload: ProductProps[]) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload,
});

const getSingleProductsSuccess = (payload: ProductProps) => ({
  type: types.GET_SINGLE_PRODUCTS_SUCCESS,
  payload,
});

// APIs

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

export const getProductsByIDApi =
  (prodID: string) => async (dispatch: AppDispatch) => {
    dispatch(productsLoading());
    // console.log(prodID);
    console.log(`${url}/products/allproducts/${prodID}`);
    try {
      let res = await axios.get(`${url}/products/allproducts/${prodID}`);
      console.log("response by id", res.data);
      if (res.data.status) {
        dispatch(getSingleProductsSuccess(res.data.data));
      } else {
        dispatch(productsError());
      }
      return { status: res.data.status };
    } catch (err) {
      console.log(err);
      dispatch(productsError());
    }
  };
