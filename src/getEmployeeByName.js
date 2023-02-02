const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const getEmployee = data.employees.find((employee) => (employee.firstName === employeeName
    || employee.lastName === employeeName));

  return getEmployee;
};

module.exports = getEmployeeByName;
