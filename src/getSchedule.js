const data = require('../data/zoo_data');

const scheduleDay = (day) => {
  if (day !== 'Monday') {
    return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  }

  return 'CLOSED';
};

const scheduleSpecie = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }

  const filteredSpecies = data.species.filter((specie) => specie.availability.includes(day));

  const mappedSpecies = filteredSpecies.map((specie) => specie.name);

  return mappedSpecies;
};

const getSchedule = (scheduleTarget) => {
  const week = Object.keys(data.hours).some((key) => key === scheduleTarget);
  if (week === true) {
    return { [scheduleTarget]: {
      officeHour: scheduleDay(scheduleTarget),
      exhibition: scheduleSpecie(scheduleTarget),
    } };
  }
  const getAnimals = data.species.some((specie) => specie.name === scheduleTarget);
  const mappedDays = Object.keys(data.hours).map((day) => ({ [day]: {
    officeHour: scheduleDay(day),
    exhibition: scheduleSpecie(day),
  },
  }));
  if (getAnimals === false || scheduleTarget === undefined) {
    return Object.assign(...mappedDays);
  }
  const getAnimal = data.species.find((specie) => specie.name === scheduleTarget);
  return getAnimal.availability;
};

console.log(getSchedule('lions'));

module.exports = getSchedule;
