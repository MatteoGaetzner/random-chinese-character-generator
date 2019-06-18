import { createStore } from 'redux'
import {charList} from './CharList.js'

function list(state = charList, action){
	switch(action.type){
		case 'ADDCHAR':
		return [...state, action.charObj]
		case 'REMCHAR':
		return state.charList.filter((e) => e.character !== action.text)
		default:
		return state;
	}
}

function randomVar(state = 78, action){
	if(action.type === 'SET_RANDOMVAR'){
		return action.value
	} else {
		return state;
	}
}

function characterApp(state = {}, action){
	return {
		charList: list(state.charList, action),
		randomVar: randomVar(state.randomVar, action),
	}
}
let store = createStore(characterApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;