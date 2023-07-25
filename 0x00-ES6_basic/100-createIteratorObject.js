export default function createIteratorObject(report) {
  // First create all the keys for the department to loop over the object
  const keys = Object.keys(report.allEmployees);

  let all = []; // Used to create an array of all the employees in the report object
  keys.forEach((key) => {
    all = [...all, ...report.allEmployees[key]];
  });

  // Custom iterator to loop over the array of employees
  const customIterator = {
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          if (count < all.length) {
            count += 1;
            return { done: false, value: all[count - 1] };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
  return customIterator;
}
