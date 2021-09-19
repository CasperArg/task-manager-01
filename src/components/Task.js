import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => 
    onToggle(task.id)} >
      {task.reminder && (
        <div className='remind'>!</div>
      )}
      <h3>
        { task.text }{' '} 
        <FaTimes 
          style={{ color: 'white', cursor: 'pointer' }} 
          onClick={() => onDelete(task.id)} /></h3>
      <p>{ task.day }</p>
    </div>
  )
}

export default Task
