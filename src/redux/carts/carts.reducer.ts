import * as types from "./carts.types";
import { CartProductProps } from "./cartTypes";

interface initProps {
  loading: boolean;
  error: boolean;
  data: CartProductProps[];
}

const initState: initProps = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.CART_PRODUCTS_LOADING: {
      return { ...state, loading: true };
    }

    case types.CART_PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.CART_GET_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, data: payload };
    }

    default: {
      return { ...state };
    }
  }
};
