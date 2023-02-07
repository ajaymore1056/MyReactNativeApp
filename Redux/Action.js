import {SUBSTRACTION,ADDITION, MULTIPLICATION, DIVISION} from './Actiontypes';

// arrow function
export const addition = () => ({
  type: ADDITION,
});

export const substraction = () => ({
  type: SUBSTRACTION,
});

export const multiplication = () => ({
  type: MULTIPLICATION,
});

export const division = () => ({
  type: DIVISION,
});
