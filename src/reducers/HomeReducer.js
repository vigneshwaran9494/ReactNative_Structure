import { FETCHING_USER_LIST, FETCHING_USER_LIST_SUCCESS, FETCHING_USER_LIST_FAILURE } from '../constants';

const HomeReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case FETCHING_USER_LIST:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case FETCHING_USER_LIST_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case FETCHING_USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            }); 
        default:
            return state;
    }
}

export default HomeReducer