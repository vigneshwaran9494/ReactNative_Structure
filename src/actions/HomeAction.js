import { FETCHING_USER_LIST, FETCHING_USER_LIST_SUCCESS, FETCHING_USER_LIST_FAILURE } from '../constants';
import axios from 'react-native-axios';

export const getUserList = () => {
    return dispatch => {
        dispatch(userListRequest())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            dispatch(userListSuccess(response.data))
        })
        .catch(error => {
            dispatch(userListError(error))
        });
    }
}

export const userListRequest = () => ({
    type: FETCHING_USER_LIST
})

export const userListError = (error) => ({
    type:FETCHING_USER_LIST_FAILURE,
    error: error
})

export const userListSuccess = (data) => ({
    type:FETCHING_USER_LIST_SUCCESS,
    data: data
})
