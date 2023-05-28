import { userType } from "../../Pages/const.pages";
import { url } from "../../utils";
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
const authLoginSuccess = (payload?: any): actionType => ({
  type: types.AUTH_LOGIN_SUCCESS,
  payload: payload,
});
const authSignupSuccess = (): actionType => ({
  type: types.AUTH_SINGUP_SUCCESS,
});

const logoutSuccess = (): actionType => ({ type: types.LOGOUT_SUCCESS });

// APIs
export const signupApi = (user: userType) => async (dispatch: Dispatch) => {
  dispatch(authLoading());

  try {
    let res: AxiosResponse = await axios.post(`${url}/users/signup`, user);
    console.log(res.data);
    if (res.data.status) {
      dispatch(authSignupSuccess());
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
    console.log(email, password, url);
    try {
      let res: AxiosResponse = await axios.post(`${url}/users/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.status) {
        dispatch(
          authLoginSuccess({ token: res.data.token, user: res.data.data })
        );
      } else {
        dispatch(authError());
      }
      return res.data;
    } catch (err) {
      dispatch(authError());
      console.log(err);
    }
  };

export const logoutApi = () => async (dispatch: AppDispatch) => {
  dispatch(logoutSuccess());
};
