export type list2Props = {
  id: string | number;
  heading: string;
  items: string[];
};

export type menuProps = {
  id: number;
  to: string;
  title: string;
  list1?: string[];
  list2?: list2Props[];
  icon?: any;
};
