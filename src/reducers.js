import { combineReducers } from 'redux'

import { CHECK, ADD, CHECK_ALL, DELETE } from './actions'

const INITIAL_VALUE = [
  { id: 'HkrtzegRz', task: 'teach react', checked: false },
  { id: 'Hyu3GlxAG', task: 'learn react', checked: true },
  { id: 'B19TGge0z', task: 'develop with react', checked: false }
]



const list = (state = INITIAL_VALUE, action) => {
  console.log(state, action)
  switch(action.type){
    case CHECK:
      return state.map(ele =>
        ele.id === action.payload ?
        { ...ele, checked: !ele.checked} :
        {...ele} )
    case ADD:
      return [...state, action.payload]
    case CHECK_ALL:
      return state.map(ele => ({...ele, checked: !action.payload }))
    case DELETE:
      return state.filter(ele => !ele.checked)
    default:
      return state
  }
}


export default combineReducers({ list })
