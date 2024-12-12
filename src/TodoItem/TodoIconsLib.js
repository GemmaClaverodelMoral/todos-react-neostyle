import './TodoIcon.css';
import { ReactComponent as DeleteSVG} from './delete.svg';

const iconType = {
    delete: (color) => <DeleteSVG className="Icon-svg" fill={color}/>
};
function TodoIconsLib({ type, color, onClick }) {
    return (
        <span 
            className={`Icon-container Icon-container-${type} &&Icon-container-check--active`}
            onClick={onClick}
        >
        {iconType[type](color)}    
      </span>
    )
}
export {TodoIconsLib};