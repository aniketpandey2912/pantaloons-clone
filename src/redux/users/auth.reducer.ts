import * as types from "./auth.types";

type authStateType = {
  isLoading: boolean;
  isError: boolean;
  token: string;
  user: {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    mobile: number;
  };
};

type actionType = {
  type: string;
  payload?: any;
};

const initState: authStateType = {
  isLoading: false,
  isError: false,
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user") || "{}"),
};

export const authReducer = (
  state = initState,
  { type, payload }: actionType
) => {
  switch (type) {
    case types.AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.AUTH_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
      console.log(payload.user);
      return {
        ...state,
        isLoading: false,
        token: payload,
        user: payload.user,
      };
    }

    case types.LOGOUT_SUCCESS: {
      return { ...initState };
    }

    default:
      return { ...state };
  }
};
