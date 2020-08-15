export const saveData = (id: string, data: Object): object | void => {
  try {
    localStorage.setItem(id, JSON.stringify(data));
    return data;
  } catch (err) {
    console.warn(err);
  }
};

export const loadData = (id: string): object | void => {
  try {
    const data = JSON.parse(localStorage.getItem(id));
    if (data === null) {
      return undefined;
    }
    return data;
  } catch (err) {
    return undefined;
  }
};

export const compareValues: (
  comparisionKey: string,
  sortOrder: string,
) => Function = function(key: string, order: string): Function {
  return function innerSort(a: any, b: any): Number {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return order === 'desc' ? comparison * -1 : comparison;
  };
};
