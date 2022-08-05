
const CommentItem = ( {name, onDelete}) => {

    let elementClassName;

    switch(element) {
      case 'name' :
        elementClassName = 'bg-danger bg-gradient';
        break;
    }
    return (
      <li
        className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
        </div>
        <div>
        <span onClick={onDelete} 
            className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
            <button type="button" className="btn-close btn-close" aria-label="Close"></button>
        </span>
        </div>
    </li>
    )
}



export default CommentItem;