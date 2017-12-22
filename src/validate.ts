import intersection from 'lodash.intersection';
import isNumber from 'lodash.isnumber';
import keys from 'lodash.keys';

export function validateId(id: number) {
  if (!isNumber(id)) {
    throw Error('id must be a number');
  }
  return true;
}

export function validateObj(params: object, requiredKeys: string[]) {
  if (requiredKeys.length !== 0) {
    const keyIntersection = intersection(keys(params), requiredKeys);
    if (requiredKeys.length === 1 && keyIntersection.length === 0) {
      throw Error(`Missing required field: ${requiredKeys[0]}`);
    } else if (keyIntersection.length === 0) {
      throw Error(`Missing one of: ${requiredKeys.join(', ')}`);
    }
    return true;
  }
}
