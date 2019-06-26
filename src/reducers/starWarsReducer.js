import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/index';

const initialState = {
  characters: [],
  err: '',
  isfetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        err: '',
        isfetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        err: '',
        isfetching: false,
        characters: action.payload
      };
    case FETCH_FAIL:
    default:
      return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
  }
};
