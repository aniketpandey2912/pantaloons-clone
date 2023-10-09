export const url = process.env.REACT_APP_URL1;

// form validation
export const validation = (data: any): boolean => {
  for (let key in data) {
    if (data[key] === "") return false;
  }

  return true;
};

let id: any = null;
export const debouncing = (func: any, args: any, delay: number = 1000) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    func(args);
  }, delay);
};
