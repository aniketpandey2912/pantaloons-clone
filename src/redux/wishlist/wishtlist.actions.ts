import axios from "axios";
import { AppDispatch } from "../store";
import * as types from "./wishtlist.types";
import { ProductProps } from "../products/productTypes";
import { CartProductProps } from "./wishtlistTypes";
import { url } from "../../utils";

const wishlistProductsLoading = () => ({
  type: types.WISHLIST_PRODUCTS_LOADING,
});
const wishlistProductsError = () => ({ type: types.WISHLIST_PRODUCTS_ERROR });

const getWishlistProductsSuccess = (payload: ProductProps[]) => ({
  type: types.WISHLIST_GET_PRODUCTS_SUCCESS,
  payload,
});

const deleteWishlistAllSuccess = () => ({
  type: types.WISHLIST_DELETE_ALL_SUCCESS,
});

// APIs
export const getCartProductsApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    console.log(token);
    try {
      let res = await axios.get(`${url}/cart/getcart`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(getWishlistProductsSuccess(res.data.data));
      } else {
        dispatch(wishlistProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
    }
  };
export const addCartProductsApi =
  (product: ProductProps | CartProductProps, token: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
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
        dispatch(wishlistProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
    }
  };

export const decreaseQtyCartProductsApi =
  (product: ProductProps | CartProductProps, token: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
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
        dispatch(wishlistProductsError());
      }
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
    }
  };

export const deleteCartProductsApi =
  (prodID: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
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
        dispatch(wishlistProductsError());
        return { status: false };
      }
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
    }
  };

export const deleteCartAllApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.delete(`${url}/cart/deletemycart`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(deleteWishlistAllSuccess());
      } else {
        dispatch(wishlistProductsError());
      }
      return { status: res.data.status, mssg: res.data.mssg };
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
    }
  };
