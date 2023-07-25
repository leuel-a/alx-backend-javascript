export default function createReportObject(employeesList) {
  const result = {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
  return result;
}
