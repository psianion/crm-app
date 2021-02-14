export default (state, action) => {
  switch (action.type) {
    case "GET_CCS":
      return {
        ...state,
        loading: false,
        ccs: action.payload,
      };
    default:
      return state;
  }
};
