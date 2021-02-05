import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './actionTypes'
import axios from 'axios'

export const getPostsRequest = () => ({
    type : GET_POSTS_REQUEST
})

export const getPostsSuccess = (payload) => ({

    type : GET_POSTS_SUCCESS,
    payload
})

export const getPostsFailure = () => ({
    type : GET_POSTS_FAILURE
})

//get posts request (thunk)

export const getPosts = () => {
getPostsRequest()
return axios({
    method : 'get',
    url : "https://venturebeat-clone.herokuapp.com/posts"
})
.then(res => getPostsSuccess(res))
.catch(err => getPostsFailure(err))
}