const { createStore } = require("redux");
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  users: ["anis"],
  count: 1,
};

// action
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// create reducer for counter
const userReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

// create a store getState(), dispatch(), subscribe()
const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch Action
store.dispatch(addUserAction("Mahdi"));
// store.dispatch(addUserAction("Soumik"));
