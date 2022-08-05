import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { createSelector } from 'reselect';

import { fetchComments, commentDeleted } from '../../action';
import CommentItem from '../commentItem/commentItem';

const CommentsList =  () => {
    const filteredCommentsSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.comments.comments,
        (filter, comments) => {
            if (filter === 'all') {
                return comments;
            } else {
                return comments.filter(item => item.element === filter);
            }
        }
    );
        const filteredComments = useSelector(filteredCommentsSelector);
        const dispatch = useDispatch();
        const {request} = useHttp();


        useEffect(() => {
        dispatch(fetchComments(request));
        // eslint-disable-next-line
    }, []);


    const onDelete = useCallback((id) => {
        dispatch(commentDeleted(id))

        // eslint-disable-next-line  
    }, [request]);

    const renderCommentList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="comment">
                    <h5 className="text-center mt-5">Комментариев пока нет</h5>
                </CSSTransition>
            )
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition 
                    key={id}
                    timeout={500}
                    classNames="comment">
                    <CommentItem  {...props} onDelete={() => onDelete(id)}/>
                </CSSTransition>
        )
        })
    }
        const elements = renderCommentList(filteredComments);
        return (
            <TransitionGroup component="ul">
                {elements}
            </TransitionGroup>
        )

}

export default CommentsList;