const initialState = { organisations:[] }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORGANISATION':
      return { ...state, organisations: action.payload };
    default:
      return state;
  }
};
