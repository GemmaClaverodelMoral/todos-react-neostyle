import { MdDoneOutline } from "react-icons/md";
import { DeleteIcon } from "./DeleteIcon";
import './TodoItem.css';

function TodoItem(props) {
    const toggleItemStatus  = () => {props.onToggle(props.text)};
    const removeItem        = () => {props.onRemove(props.text)};

    return (
      <li className="TodoItem">
      <span 
        className={`Icon-container Icon-container-check ${props.completed && "Icon-container-check--active"}`}
        onClick={toggleItemStatus}
        ><MdDoneOutline/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon 
        onRemove={removeItem}/>
    </li>
    );
  }

  export { TodoItem }