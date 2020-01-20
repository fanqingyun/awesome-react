// const initialState = {
//   number: 0
// };

const incrementReducer = (state = 1000, action) => {
  switch (action.type) {
    case '涨工资':
        return state += 100;
    case '扣工资':
        return state -= 100;
    default:
        return state;
}
};
export default incrementReducer;