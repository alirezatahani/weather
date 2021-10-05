import actionTypes from './types';

const initialState = {
  locationNames: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        locationNames: [...state.locationNames, action.payload],
      };
    default: {
      return state;
    }
  }
}
