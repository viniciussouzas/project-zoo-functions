const data = require('../data/zoo_data');

const allEmployees = () => {
  const employee = data.employees.map((emp) => {
    const objInfo = {
      id: emp.id,
      fullName: `${emp.firstName} ${emp.lastName}`,
      species: [],
      locations: [] };

    emp.responsibleFor.forEach((animal) => {
      const getSpecies = data.species.find((specie) => specie.id === animal);

      objInfo.species.push(getSpecies.name);
      objInfo.locations.push(getSpecies.location);
    });

    return objInfo;
  });

  return employee;
};

const employeeInfo = (param) => {
  const objInfo = {
    id: param.id,
    fullName: `${param.firstName} ${param.lastName}`,
    species: [],
    locations: [] };

  param.responsibleFor.forEach((animal) => {
    const getAnimal = data.species.find((specie) => specie.id === animal);

    objInfo.species.push(getAnimal.name);
    objInfo.locations.push(getAnimal.location);
  });

  return objInfo;
};

const getEmployeesCoverage = (object) => {
  if (!object) return allEmployees();

  const getValue = Object.values(object)[0];

  const findEmployee = data.employees.find((emp) =>
    (emp.firstName === getValue) || (emp.lastName === getValue) || (emp.id === getValue));

  if (findEmployee === undefined) throw new Error('Informações inválidas');

  return employeeInfo(findEmployee);
};

module.exports = getEmployeesCoverage;
