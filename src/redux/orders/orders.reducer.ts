import * as types from "./orders.types";

interface initProps {
  loading: boolean;
  error: boolean;
  orders: any;
}

const initState: initProps = {
  loading: false,
  error: false,
  orders: [],
};

export const ordersReducer = (
  state = initState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.ORDERS_LOADING: {
      return { ...state, loading: true };
    }

    case types.ORDERS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.GET_ORDERS_SUCCESS: {
      return { ...state, loading: false, orders: payload };
    }

    case types.ADD_ORDERS_SUCCESS: {
      return { ...state, loading: false, orders: [...state.orders, payload] };
    }

    default: {
      return { ...state };
    }
  }
};
