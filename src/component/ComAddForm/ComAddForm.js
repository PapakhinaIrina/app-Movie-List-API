import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { commentCreated, commentDeleted } from "../../action";

const ComAddForm = () => {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newComment = {
        id: uuidv4(),
        name: comment,
      }
    dispatch(commentCreated(newComment))
    e.target.reset();
          setComment('');
  }

  const {comment: allComment} = useSelector(state => state.comments);
  const renderCommentList = (arr) => {
    if ( arr.length === 0) {
      return (
        <h5 className="text-center mt-5">Комментариев пока нет</h5>
        )
      }
    return arr.map(({text, id}) => {
        return (
          {
            text: text,
          id:id
        }
        )
  })
  
}
  const elements = renderCommentList(allComment); 
  const onDelete = (id) => {
    dispatch(commentDeleted(id))

  }
  return (
    <>
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
            <input 
              required
              type="text" 
              name="comment" 
              className="comment" 
              id="name"
              placeholder="Комментарий..."
              onChange={(e) => setComment(e.target.value)}/>
      </div>
      <div>
        <button className="button" value="Отправить"type='submit' name="Submit">Отправить</button>
      </div>
    </form>

      {Array.isArray(elements) && elements.length ? 
      (elements.map(({text, id})=>{
        return(
        <div className="border p-4 shadow-lg rounded comments">
          <h5>{text}</h5>
            <button 
                required
                type="text"
                className="button_delete" 
                onClick={()=> onDelete(id)} 
                name="Submit">Удалить комментарий
            </button>
        </div>
        )
      })
      ):(
      <h5 className="text-center mt-5">Комментариев пока нет</h5>
      )}
    </>
  )
}


export default ComAddForm;