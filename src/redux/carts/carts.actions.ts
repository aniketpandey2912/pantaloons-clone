import axios from "axios";
import { AppDispatch } from "../store";
import * as types from "./carts.types";
import { ProductProps } from "../products/productTypes";
import { CartProductProps } from "./cartTypes";
import { url } from "../../utils";

const cartProductsLoading = () => ({ type: types.CART_PRODUCTS_LOADING });
const cartProductsError = () => ({ type: types.CART_PRODUCTS_ERROR });

const getCartProductsSuccess = (payload: ProductProps[]) => ({
  type: types.CART_GET_PRODUCTS_SUCCESS,
  payload,
});

const deleteCartAllSuccess = () => ({ type: types.CART_DELETE_ALL_SUCCESS });

// APIs
export const getCartProductsApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    console.log(token);
    try {
      let res = await axios.get(`${url}/cart/getcart`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
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
export const addCartProductsApi =
  (product: ProductProps | CartProductProps, token: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.post(
        `${url}/cart/addtocart`,
        { prod: product },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log("response", res.data.data);
      if (res.data.status) {
        return { status: true };
      } else {
        dispatch(cartProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(cartProductsError());
    }
  };

export const decreaseQtyCartProductsApi =
  (product: ProductProps | CartProductProps, token: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.post(
        `${url}/cart/decreaseqty`,
        { prod: product },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log("response", res.data.data);
      if (res.data.status) {
        getCartProductsApi(token);
        return { status: true };
      } else {
        dispatch(cartProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(cartProductsError());
    }
  };

export const deleteCartProductsApi =
  (prodID: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.delete(`${url}/cart/deletecartitem/${prodID}`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
      if (res.data.status) {
        getCartProductsApi(token);
        return { status: true };
      } else {
        dispatch(cartProductsError());
        return { status: false };
      }
    } catch (err) {
      console.log(err);
      dispatch(cartProductsError());
    }
  };

export const deleteCartAllApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(cartProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.delete(`${url}/cart/deletemycart`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(deleteCartAllSuccess());
      } else {
        dispatch(cartProductsError());
      }
      return { status: res.data.status };
    } catch (err) {
      console.log(err);
      dispatch(cartProductsError());
    }
  };
