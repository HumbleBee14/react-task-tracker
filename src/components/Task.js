import { FaTimes } from 'react-icons/fa'
// Importing 'FaTimes'  icons as Components and used below

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() =>
    onToggle(task.id) } >
      <h3>
        {task.text}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task

// Note: "States" gets passed Down & "Actions" gets passed Up

