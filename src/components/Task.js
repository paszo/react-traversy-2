import {FaTimes} from 'react-icons/fa';

const Task = ({task, onToggle, onDelete}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h2>
                {task.text}
                <FaTimes onClick={() => onDelete(task.id)}/>
            </h2>
            <p>{task.day}</p>
        </div>
    )
};

export default Task;