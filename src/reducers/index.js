import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

export const RootReducer = combineReducers({
    HomeReducer
})

const appReducer = (state, action) => {
    if (action.type === 'CLEARSTORE') {
        state = undefined
    }
    return RootReducer(state, action)
}