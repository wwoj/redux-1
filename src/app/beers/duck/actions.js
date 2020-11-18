import types from './types';

const add = item =>({type:types.ADD_BEER,item})
const reset = (item) =>({type: types.RESET_BEERS,item})

export default {add,reset};