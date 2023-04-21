import { userType } from "../../Pages/const.pages";
import { AppDispatch } from "../store";
import * as types from "./auth.types";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

type actionType = {
  type: string;
  payload?: any;
};

const authLoading = (): actionType => ({
  type: types.AUTH_LOADING,
});
const authError = (): actionType => ({ type: types.AUTH_ERROR });
const authSuccess = (payload?: any): actionType => ({
  type: types.AUTH_SUCCESS,
  payload: payload,
});

const logoutSuccess = (): actionType => ({ type: types.LOGOUT_SUCCESS });

const url = process.env.REACT_APP_URL1;

// APIs
export const signupApi = (user: userType) => async (dispatch: Dispatch) => {
  dispatch(authLoading());

  try {
    let res: AxiosResponse = await axios.post(`${url}/users/signup`, user);
    console.log(res.data);
    if (res.data.status) {
      dispatch(authSuccess());
    } else {
      dispatch(authError());
    }
    return res.data;
  } catch (err) {
    dispatch(authError());
    console.log(err);
  }
};

export const loginApi =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(authLoading());

    try {
      let res: AxiosResponse = await axios.post(`${url}/users/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.status) {
        dispatch(authSuccess(res.data.token));
      } else {
        dispatch(authError());
      }
      return res.data;
    } catch (err) {
      dispatch(authError());
      console.log(err);
    }
  };

export const logoutApi = () => {
  logoutSuccess();
};
