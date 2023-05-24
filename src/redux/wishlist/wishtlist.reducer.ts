import * as types from "./wishtlist.types";
import { CartProductProps } from "./wishtlistTypes";

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

export const wishlistReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.WISHLIST_PRODUCTS_LOADING: {
      return { ...state, loading: true };
    }

    case types.WISHLIST_PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.WISHLIST_GET_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, data: payload };
    }

    case types.WISHLIST_DELETE_ALL_SUCCESS: {
      return { ...initState };
    }

    default: {
      return { ...state };
    }
  }
};
