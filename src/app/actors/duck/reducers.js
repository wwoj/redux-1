import types from './types';
const INITIAL_STATE = {
    listName:'Actors',
    list:[
      {name:'Tom Hanks',age:18},{name:'Julia Roberts',age:18},{name:'Angelina Jolie',age:18}
    ]
  }

 const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_ACTOR:
        return{
          ...state,list:[...state.list,action.item]
        }
      case types.RESET_ACTORS:
    return{
      ...state,list:[]
    }
      default:
        return state
    }
  }
  export default actorsReducer;