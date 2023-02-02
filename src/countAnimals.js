const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const allResidents = {};
    data.species.forEach((specie) => {
      allResidents[`${specie.name}`] = specie.residents.length;
    });
    return allResidents;
  }
  if (!animal.sex) {
    const specieResidents = data.species.find((specie) =>
      specie.name === animal.species).residents.length;
    return specieResidents;
  }
  if (animal.sex) {
    const genderResidents = data.species.find((specie) => specie.name === animal.species).residents;
    const getGenderResidents = genderResidents.filter((resident) =>
      resident.sex === animal.sex);
    return getGenderResidents.length;
  }
};

module.exports = countAnimals;
