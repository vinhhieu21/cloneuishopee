import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

const allReducer = combineReducers({
    ...reducer
})

const store = createStore(
    allReducer
)

export {store}