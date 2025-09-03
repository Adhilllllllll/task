
//import Redux
const {createStore,combineReducers}=require('redux');

//reducer 1 : counter

function counterReducer(state={count:0},action){
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count +1};
        case 'DECREMENT':
            return {count:state.count -1};
        default:
            return state;
    }
};

//reducer 2 : TODO

function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}



//combine reducers

const rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});


//create  store

const store=createStore(rootReducer);

//subscribe

store.subscribe(()=>{
    console.log('state changed:', store.getState());
    
});

//dispatch action

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})

store.dispatch({type:'ADD_TODO', payload:'Learn Redux'});
store.dispatch({type:'ADD_TODO', payload:'Build A Project'});
