// user type

export interface userType {
  _id?: string | number;
  avatar?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: "Male" | "Female" | "Others" | "";
  mobile: number | "";
}

// input, select, button
export type inputType = React.ChangeEventHandler<
  HTMLInputElement | HTMLSelectElement
>;
export type clickBtnType = React.MouseEventHandler<HTMLButtonElement>;
