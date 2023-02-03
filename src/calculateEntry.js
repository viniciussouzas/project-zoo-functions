const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const showEntrants = { child: 0, adult: 0, senior: 0 };

  if (entrants.length === undefined) {
    return 0;
  }

  showEntrants.child = entrants.filter((entrant) => entrant.age < 18).length;

  showEntrants.adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;

  showEntrants.senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return showEntrants;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const callCount = countEntrants(entrants);
  const getEntrantsClass = Object.keys(countEntrants(entrants));

  const getValue = getEntrantsClass.reduce((acc, entrant) =>
    acc + (callCount[entrant] * data.prices[entrant]), 0);

  return Number(getValue.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
