import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configureState(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}