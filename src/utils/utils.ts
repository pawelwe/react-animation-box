export const compareValues: (
  comparisionKey: string,
  sortOrder: string
) => Function = function (key: string, order: string): Function {
  return function innerSort(a: any, b: any): Number {
    // eslint-disable-next-line no-prototype-builtins
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return order === "desc" ? comparison * -1 : comparison;
  };
};

export const getPercentageFromPartialValue = (
  partialValue: number,
  totalValue: number
): number => {
  return (100 * partialValue) / totalValue;
};
