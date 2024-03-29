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

const searchedProductsLoading = () => ({
  type: types.GET_SEARCHED_PRODUCTS_LOADING,
});
const searchedProductsError = () => ({
  type: types.GET_SEARCHED_PRODUCTS_ERROR,
});

const searchedProductsSuccess = (payload: ProductProps[]) => ({
  type: types.GET_SEARCHED_PRODUCTS_SUCCESS,
  payload,
});

const emptySearchedProductsSuccess = () => ({
  type: types.EMPTY_SEARCHED_PRODUCTS_SUCCESS,
});

// APIs
export const getProductsApi =
  (path: string) => async (dispatch: AppDispatch) => {
    dispatch(productsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.get(`${url}/${path}`);
      // console.log("response", res.data.data);
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

export const getSearchedProductsApi =
  (path: string) => async (dispatch: AppDispatch) => {
    dispatch(searchedProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.get(`${url}/${path}`);
      // console.log("response", res.data);
      if (res.data.status) {
        dispatch(searchedProductsSuccess(res.data.data));
      } else {
        dispatch(searchedProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(searchedProductsError());
    }
  };

export const emptySearchedProductsApi = () => async (dispatch: AppDispatch) => {
  dispatch(emptySearchedProductsSuccess());
};

export const getProductsByIDApi =
  (prodID: string) => async (dispatch: AppDispatch) => {
    dispatch(productsLoading());
    // console.log(prodID);
    // console.log(`${url}/products/allproducts/${prodID}`);
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
