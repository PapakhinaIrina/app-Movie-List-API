const initialState = {
    comment: []
}

const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'COMMENT_CREATED':
            return {
                comment: [
                    ...state.comment,
                    {
                    text: action.payload.name,
                    id: action.payload.id
                    }
                ],
                
            }
        case 'COMMENT_DELETED': 
        return {
            ...state,
            comment: state.comment.filter(item => item.id !== action.payload)
        }
        default: return state
    }
}
export default comments;