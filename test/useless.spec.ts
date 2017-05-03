import { uselessMapper } from '../app/src/view-mappers/useless.view-mapper';

describe('useless.view-mapper', () => {
  test('useless mapper properly map', () => {
    const expected = `Useless value from view mapper: 100`;
    const result = uselessMapper(100);

    expect(result).toBe(expected);
  });

  test('useless mapper properly map - failing', () => {
    const expected = `Useless value from view mapper: 100`;
    const result = uselessMapper(10);

    expect(result).toBe(expected);
  });
});
