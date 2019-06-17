import { createStore } from 'redux'

function reducer(state = [], action){
	switch(action.type){
		case 'ADDCHAR':
		return [...state, action.charObj]
		case 'REMCHAR':
		return [...state, action.charObj]
		default:
		return state;
	}
}

let store = createStore(reducer)