import { DIVISION, MULTIPLICATION} from './Actiontypes';

const initialState = {
  number:2
};

export const mainReducer1 = (state = initialState, action) =>{
  switch (action.type) {

    case DIVISION:
      return {...state, number: state.number / 2};

      case MULTIPLICATION:
      return {...state, number: state.number * 2};
    default:
      return state;
  }
}
