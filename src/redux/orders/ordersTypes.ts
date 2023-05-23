export interface OrderProps {
  userID?: string;
  payment: {
    mode: "CashOnDelivery" | "Online";
    amount: number;
  };
  date?: Date; // will be added from backend by default
  time?: string; // will be added from backend by default
  address: {
    house: String;
    city: String;
    postalAddress: String;
    state: String;
    country: String;
  };
}
