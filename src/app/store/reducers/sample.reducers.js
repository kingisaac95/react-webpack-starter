import * as Actions from '../actions/sample.actions';

const initialState = {
  hasInitialState: true,
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SAMPLE_ACTION:
      return { nothing: null };
    case Actions.SAMPLE_ACTION_WITH_PAYLOAD:
      return {
        ...state,
        dataFromWherever: action.payload,
      };
    default:
      return state;
  }
};

export default sample;
