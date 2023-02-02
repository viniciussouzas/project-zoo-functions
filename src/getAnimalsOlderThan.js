const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getSpecie = data.species.find((specie) => specie.name === animal);

  const verifyAge = getSpecie.residents.every((resident) => resident.age >= age);

  return verifyAge;
};

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
