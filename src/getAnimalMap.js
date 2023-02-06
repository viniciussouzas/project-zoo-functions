const data = require('../data/zoo_data');

const getAnimalByLoc = () => data.species.reduce((acc, specie) => {
  if (acc[specie.location]) {
    acc[specie.location].push(specie.name);
  } else {
    acc[specie.location] = [specie.name];
  }
  return acc;
}, {});

const getAnimalBySex = (object) => {
  const getAnimalSex = data.species.reduce((acc, specie) => {
    let result = specie.residents.filter((resident) =>
      resident.sex === object.sex).map((animal) => animal.name);
    if (object.sorted) {
      result = specie.residents.filter((resident) =>
        object.sex === resident.sex).map((animal) => animal.name).sort();
    }
    const animalSexNames = { [specie.name]: result };
    if (acc[specie.location]) {
      acc[specie.location].push(animalSexNames);
    } else {
      acc[specie.location] = [animalSexNames];
    }

    return acc;
  }, {});

  return getAnimalSex;
};

const getAnimalByName = (object) => {
  const getAnimalName = data.species.reduce((acc, specie) => {
    let result = specie.residents.map((resident) => resident.name);

    if (object.includes('sorted')) {
      result = specie.residents.map((animal) => animal.name).sort();
    }

    const animalNames = { [specie.name]: result };

    if (acc[specie.location]) {
      acc[specie.location].push(animalNames);
    } else {
      acc[specie.location] = [animalNames];
    }
    return acc;
  }, {});

  return getAnimalName;
};

const getAnimalMap = (options) => {
  if (options === undefined || options.includeNames === undefined) return getAnimalByLoc();

  if (options.sex !== undefined) return getAnimalBySex(options);

  const optionsArray = Object.keys(options);

  return getAnimalByName(optionsArray);
};

module.exports = getAnimalMap;
