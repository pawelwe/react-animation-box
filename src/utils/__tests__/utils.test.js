import { compareValues } from '../utils';

describe('Utils', () => {
  it('should sort by key', () => {
    const array = [{ name: 'Luke' }, { name: 'Anakin' }];
    const sortedArray = array.sort(compareValues('name'));

    expect(sortedArray).toStrictEqual([{ name: 'Anakin' }, { name: 'Luke' }]);
  });
});
