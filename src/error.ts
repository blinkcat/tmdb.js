export function throwNumberOrUndefinedFieldError(field: string) {
  throw Error(`${field} must be number type or undefined`);
}

export function throwNumberOrStringFieldError(field: string) {
  throw Error(`${field} must be number type or string type`);
}

export function throwStringFieldError(field: string) {
  throw Error(`${field} must be string type`);
}

export function throwNumberFieldError(field: string) {
  throw Error(`${field} must be number type`);
}
