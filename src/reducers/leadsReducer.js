export default (state, action) => {
  switch (action.type) {
    case "GET_LEADS":
      return {
        ...state,
        loading: false,
        leads: action.payload,
      };
    default:
      return state;
  }
};
