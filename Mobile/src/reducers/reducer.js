const initialState = {
  data: null
  // {
  //     id: null,
  //     location: null,
  //     name: null,
  //     yearStart: null,
  //     monthStart: null,
  //     dayStart: null,
  //     hourStart: null,
  //     minStart: null,
  //     yearEnd: null,
  //     monthEnd: null,
  //     dayEnd: null,
  //     hourEnd: null,
  //     minEnd: null,
  // }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SHARED_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;