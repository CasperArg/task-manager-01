import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add text')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
        <label>Tarea</label>
        <input type='text' placeholder='Agregar tarea' value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div className='form-control'>
        <label>Fecha y hora</label>
        <input type='text' placeholder='Agregar fecha y hora' value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Establecer recordatorio</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} 
        />

      </div>

      <input type='submit' className='btn btn-block' value='Guardar tarea'></input>
    </form>
  )
}

export default AddTask
