import * as types from "./products.types";
import { ProductProps } from "./productTypes";

interface initProps {
  loading: boolean;
  error: boolean;
  data: ProductProps[];
}

const initState: initProps = {
  loading: false,
  error: false,
  data: [],
};

export const productsReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.PRODUCTS_LOADING: {
      return { ...state, loading: true };
    }

    case types.PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.GET_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, data: payload.data };
    }

    default: {
      return { ...state };
    }
  }
};
