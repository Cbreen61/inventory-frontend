const initialState = {
    regions: [],
    loading: true
  }
  
  const regionsReducer = (state=initialState, action) => {
    switch(action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true
        }
      case "SET_REGIONS":
        return {
          ...state,
          loading: false,
          regions: action.regions
        }
        default:
            return state;
    }
  }

  export default regionsReducer;