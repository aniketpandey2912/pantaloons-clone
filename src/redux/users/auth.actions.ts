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
  payload,
});
const authSignupSuccess = (): actionType => ({
  type: types.AUTH_SINGUP_SUCCESS,
});

const updateUserSuccess = (payload: userType): actionType => ({
  type: types.UPDATE_USER_SUCCESS,
  payload,
});

const getUserInfoSuccess = (payload?: any): actionType => ({
  type: types.GET_USER_INFO_SUCCESS,
  payload,
});

const logoutSuccess = (): actionType => ({ type: types.LOGOUT_SUCCESS });

// APIs
export const signupApi = (user: userType) => async (dispatch: Dispatch) => {
  dispatch(authLoading());

  try {
    let res: AxiosResponse = await axios.post(`${url}/users/signup`, user);
    // console.log(res.data);
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
    // console.log(email, password, url);
    try {
      let res: AxiosResponse = await axios.post(`${url}/users/login`, {
        email,
        password,
      });
      // console.log(res.data);
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

export const updateUserInfoAPI =
  (token: string, updates: any) => async (dispatch: AppDispatch) => {
    dispatch(authLoading());
    // console.log("updates", updates);
    try {
      let res: AxiosResponse = await axios.patch(
        `${url}/users/editinfo`,
        updates,
        {
          headers: {
            authorization: token,
          },
        }
      );
      // console.log(res.data);
      if (res.data.status) {
        dispatch(updateUserSuccess(updates));
      } else {
        dispatch(authError());
      }
      return res.data;
    } catch (err) {
      dispatch(authError());
      console.log(err);
    }
  };
export const getUserInfoAPI =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(authLoading());
    try {
      let res: AxiosResponse = await axios.get(`${url}/users/getinfo`, {
        headers: {
          authorization: token,
        },
      });
      // console.log(res.data);
      if (res.data.status) {
        dispatch(
          getUserInfoSuccess({ token: res.data.token, user: res.data.data })
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
