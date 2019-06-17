// export all action types relating to this file in any case it's needed in other files
export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const SAMPLE_ACTION_WITH_PAYLOAD = 'SAMPLE_ACTION_WITH_PAYLOAD';

export const sampleAction = () => dispatch => {
  dispatch({
    type: SAMPLE_ACTION,
  });
};

export const sampleActionWithPayload = () => dispatch => {
  const payload = {};

  dispatch({
    type: SAMPLE_ACTION_WITH_PAYLOAD,
    payload,
  });
};
