const initialState = { countries:[] }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIESD':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};
