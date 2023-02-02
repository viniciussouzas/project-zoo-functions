const data = require('../data/zoo_data');

const isManager = (id) => {
  const verifyIsManager = data.employees.some((employee) =>
    employee.managers.includes(id) === true);

  return verifyIsManager;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const getEmployees = data.employees.filter((employee) => employee.managers.includes(managerId));

    return getEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

module.exports = { isManager, getRelatedEmployees };
