const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se getOpeningHours é definida', () => {
    expect(getOpeningHours()).toBeDefined();
  });

  test('Testa se ao não passar argumentos função retorna objeto calendário', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  test('Testa se ao passar Monday e 09:00-AM, retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  test('Testa se ao passar Wednesday e 09:00-AM, retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  test('Testa se ao passar Tuesday e 09:00-AM, retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  test('Testa se ao passar abreviação incorreta, retorna erro', () => {
    expect(() => { getOpeningHours('Monday', '09:00-PU'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('Testa se ao passar o dia incorretamente, retorna erro', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });

  test('Testa se ao passar uma letra no campo de horas, retorna erro', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-Am'); }).toThrow('The hour should represent a number');
  });

  test('Testa se ao passar uma letra no campo de minutos, retorna erro', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-Am'); }).toThrow('The minutes should represent a number');
  });

  test('Testa se ao inserir campo de hora fora de 0 a 12, retorna erro', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });

  test('Testa se ao inserir campo de minutos fora de 0 a 59, retorna erro', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
});
