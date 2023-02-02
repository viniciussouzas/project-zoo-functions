const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const matchIds = [data.species.find((specie) => specie.id === ids[0])];
    return matchIds;
  }
  if (ids.length > 1) {
    const showSpecies = [];

    ids.forEach((id) => {
      showSpecies.push(data.species.find((specie) => specie.id === id));
    });
    return showSpecies;
  }
};

module.exports = getSpeciesByIds;
