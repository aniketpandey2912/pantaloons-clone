export const validation = (data: any): boolean => {
  for (let key in data) {
    if (data[key] === "") return false;
  }

  return true;
};

export const url = process.env.REACT_APP_URL2;
