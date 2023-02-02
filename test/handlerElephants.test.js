const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se parâmetro vazio, retorna undefined', () =>
    expect(handlerElephants()).toBeUndefined());

  test('Testa se parâmetro diferente de string, retorna mensagem', () =>
    expect(handlerElephants(12)).toBe('Parâmetro inválido, é necessário uma string'));

  test('Testa se "count", retorna o valor esperado', () =>
    expect(handlerElephants('count')).toBe(4));

  test('Testa se "names", retorna o array de nomes com o nome esperado', () =>
    expect(handlerElephants('names')).toContain('Jefferson'));

  test('Testa se "averageAge", retorna o valor próximo esperado', () =>
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5));

  test('Testa se "name", retorna o valor esperado', () =>
    expect(handlerElephants('name')).toBe('elephants'));

  test('Testa se "popularity", retorna o valor esperado', () =>
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5));

  test('Testa se "location", retorna o valor esperado', () =>
    expect(handlerElephants('location')).toBe('NW'));

  test('Testa se "availabilty", retorna o valor esperado', () =>
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']));

  test('Testa se ao passar parâmetro inexistente no objeto, retorna null', () =>
    expect(handlerElephants('height')).toBeNull());
});
