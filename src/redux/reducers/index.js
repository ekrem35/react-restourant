import { combineReducers } from "redux";
import { ADD, UPDATE, DELETE, DELETE_ALL } from '../actions/types'

export default combineReducers({
    basket: (state = [], action) => {
        switch (action.type) {
            case ADD: return [...[], ...state, ...[action.payload]]
            case UPDATE: return [...[], ...state, ...state[action.payload.index], action.payload.state]
            case DELETE: return [...[], ...state.filter((item, index) => index !== action.payload)]
            case DELETE_ALL: return []
            default: return state
        }
    }
});
