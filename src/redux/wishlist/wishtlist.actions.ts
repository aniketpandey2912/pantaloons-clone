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
const removeWishlistOneProductSuccess = (prodID: string) => ({
  type: types.WISHLIST_REMOVE_ONE_PRODUCT_SUCCESS,
  payload: prodID,
});

// APIs
export const getWishlistProductsApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    // console.log(token);
    try {
      let res = await axios.get(`${url}/wishlist/getwishlist`, {
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
export const addWishlistProductsApi =
  (product: ProductProps | CartProductProps, token: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.post(
        `${url}/wishlist/addtowishlist`,
        { prod: product },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("response", res.data);
      if (res.data.status === false) {
        dispatch(wishlistProductsError());
      }
      return res.data;
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
      return { status: false, mssg: "Something went wrong" };
    }
  };

export const deleteWishlistProductsApi =
  (prodID: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.delete(
        `${url}/wishlist/deletewishlistitem/${prodID}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(removeWishlistOneProductSuccess(prodID));
      } else {
        dispatch(wishlistProductsError());
      }
      return res.data;
    } catch (err) {
      console.log(err);
      dispatch(wishlistProductsError());
      return { status: false, mssg: "Something went wrong" };
    }
  };

export const deleteWishlistAllApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(wishlistProductsLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.delete(`${url}/wishlist/deletemywishlist`, {
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
