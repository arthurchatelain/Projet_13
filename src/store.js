import { createStore } from "redux";

// state 

const initialState =  JSON.parse(localStorage.state) || {
rememberMe: false,
token: null,
userData: null,
id: null
}

// actions creators

export const SET_REMEMBER_ME = 'SET_REMEMBER_ME'
export const INIT_REMEMBER_ME = 'INIT_REMEMBER_ME'
export const SET_TOKEN = 'SET_TOKEN'
export const INIT_TOKEN = 'INIT_TOKEN'
export const SET_USER_DATA = 'SET_USER_DATA'
export const INIT_USER_DATA = 'INIT_USER_DATA'
export const SET_USER_ID = 'SET_USER_ID'
export const INIT_USER_ID = 'INIT_USER_ID'
export const INIT_STATE = 'INIT_STATE'


function reducer(state = initialState, action) {

  let newState

  switch (action.type) {
    case INIT_STATE:
      newState = {rememberMe: false, token: null, userData: null, id: null }
      break
    case SET_REMEMBER_ME:
      newState = {...state, rememberMe: action.payload}
      break
    case INIT_REMEMBER_ME:
      newState = {...state, rememberMe: false}
      break
    case SET_TOKEN:
      newState = {...state, token: action.payload}
      break
    case INIT_TOKEN:
      newState = {...state, token: null}
      break
    case SET_USER_DATA:
      newState = {...state, userData: action.payload}
      break
    case INIT_USER_DATA:
      newState = {...state, userData: null}
      break
    case SET_USER_ID:
      newState = {...state, id: action.payload}
      break
    case INIT_USER_ID:
      newState = {...state, id: null}
      break
    default: 
      newState = state
      break
  }
  localStorage.setItem('state', JSON.stringify(newState))
  return newState
}

export const store = createStore(reducer);