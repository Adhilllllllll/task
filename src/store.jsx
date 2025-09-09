import { createStore } from "redux";

//initialState

const initialState={
    count:0
};

//reducer

function  CounterReducer(state=initialState,action){
    switch(action.type){
        case 'increment':
            return{count:state.count +1};
        case 'decrement':
            return{count:state.count -1};
        default:
            return state;
    }
};




//store
const store =createStore(CounterReducer)

export default store;