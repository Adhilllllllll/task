import {createStore,applyMiddleware,compose } from "redux";

//initialState

const initialState={
    count :0
}



//reducers

function CounterReducer(state=initialState,action){
    switch(action.type){
       case 'increment':
        return {count:state.count +1};
    case 'decrement':
        return{count:state.count-1};
    default:
        return state;
    }
}

//basic logger middleware

const loggedMiddleware=(store)=>(next)=>(action)=>{
    console.log('dispatching action',action);
    const result=next(action);
    console.log('next satte',store.getState());
    return result;
    
    
};

//devtools 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store

const store=createStore(
    CounterReducer,
    composeEnhancers(applyMiddleware(loggedMiddleware))
);

export default store;