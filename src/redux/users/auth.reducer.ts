import * as types from "./auth.types";

type authStateType = {
  isLoading: boolean;
  isError: boolean;
  token: string;
};

type actionType = {
  type: string;
  payload?: any;
};
const initState: authStateType = {
  isLoading: false,
  isError: false,
  token: localStorage.getItem("token") || "",
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
      localStorage.setItem("token", payload);
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    }

    case types.LOGOUT_SUCCESS: {
      return { ...initState };
    }

    default:
      return { ...state };
  }
};
