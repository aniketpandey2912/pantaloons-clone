import axios from "axios";
import { AppDispatch } from "../store";
import * as types from "./orders.types";
import { OrderProps } from "./ordersTypes";
import { url } from "../../utils";

const ordersLoading = () => ({ type: types.ORDERS_LOADING });
const ordersError = () => ({ type: types.ORDERS_ERROR });

const getOrdersSuccess = (payload: OrderProps[]) => ({
  type: types.GET_ORDERS_SUCCESS,
  payload,
});

const addOrdersSuccess = (payload: OrderProps) => ({
  type: types.ADD_ORDERS_SUCCESS,
  payload,
});

// APIs

export const getOrdersApi =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(ordersLoading());
    console.log(token);
    try {
      let res = await axios.get(`${url}/orders/getmyorders`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(getOrdersSuccess(res.data.data));
      } else {
        dispatch(ordersError());
      }
    } catch (err) {
      console.log(err);
      dispatch(ordersError());
    }
  };
export const addOrdersApi =
  (order: OrderProps, token: string) => async (dispatch: AppDispatch) => {
    dispatch(ordersLoading());
    // console.log(`${url}/${path}`);
    try {
      let res = await axios.post(
        `${url}/orders/addorder`,
        { ...order },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log("response", res.data.data);
      if (res.data.status) {
        dispatch(addOrdersSuccess(res.data.data));
      }
      return { status: res.data.status, mssg: res.data.mssg };
    } catch (err) {
      console.log(err);
      dispatch(ordersError());
    }
  };
