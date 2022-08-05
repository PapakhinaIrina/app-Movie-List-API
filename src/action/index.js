import { createAction } from "@reduxjs/toolkit";

export const fetchComments = (request) => (dispatch) => {
    dispatch(commentsFetching());
    request("http://localhost:3000/movie-details")
        .then(data => dispatch(commentsFetched(data)))
        .catch(() => dispatch(commentsFetchingError()))
}

export const commentsFetching = createAction('COMMENTS_FETCHING');

export const commentsFetched = createAction('COMMENTS_FETCHED');

export const commentsFetchingError = () => {
    return {
        type: 'COMMENTS_FETCHING_ERROR'
    }
}

export const commentCreated = (comment) => {
    return {
        type: 'COMMENT_CREATED',
        payload: comment
    }
}

export const commentDeleted = (id) => {
    return {
        type: 'COMMENT_DELETED',
        payload: id
    }
}