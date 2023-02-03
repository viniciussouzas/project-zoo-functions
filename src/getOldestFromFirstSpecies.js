const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findEmployee = data.employees.find((employee) => employee.id === id);

  const findSpecie = data.species.find((specie) => findEmployee.responsibleFor.includes(specie.id));

  const findOldest = Object.values(findSpecie.residents.reduce((acc, resident) =>
    (acc.age > resident.age ? acc : resident), 0));

  return findOldest;
};

module.exports = getOldestFromFirstSpecies;
