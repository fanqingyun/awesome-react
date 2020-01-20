const initialState = {
  number: 0,
  tiger: 10000
};

const incrementReducer = (state = initialState, action) => {
  // 这里return的时候。state换成 {...state}
  switch (action.type) {
    case '涨工资':
        state.tiger +=1000
        console.log(state)
        return { ...state };
    case '扣工资':
        state.tiger -=1000
        return { ...state };
    default:
        return state;
}
};
export default incrementReducer;