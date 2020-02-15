export function isValidHex(value): boolean {
  let validHex = false;
  let numLength = value.length;
  let parsedNum = parseInt(value, 16);
  // @ts-ignore
  if (!isNan(parsedNum) && parsedNum.length === numLength) {
    validHex = true;
  }
  return validHex;
}
