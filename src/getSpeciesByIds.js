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

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '78460a91-f4da-4dea-a469-86fd2b8ccc84'));

module.exports = getSpeciesByIds;
