const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const matchOneId = [data.species.find((specie) => specie.id === ids[0])];
    return matchOneId;
  }
  if (ids.length > 1) {
    const showSpecies = [];

    ids.forEach((id) => {
      const matchIds = data.species.find((specie) => specie.id === id);
      showSpecies.push(matchIds);
    });
    return showSpecies;
  }
};

module.exports = getSpeciesByIds;
