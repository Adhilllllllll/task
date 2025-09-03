//import redux
const { count } = require("console");
const { type } = require("os");
const { createStore } = require("redux");

//define initialstate

const initialState = {
  count: 0,
};

// create reducer function

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

//create store

const store = createStore(counterReducer);

//subscribe store updates

store.subscribe(() => {
  console.log("current state:", store.getState());
});

//dispatch action

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });


 