import { useState } from 'react'
import Dots from './Icons/Dots'
import Popup from './Popup'

export default function Opciones({ idTask, tasks, setTasks}) {

    const[open, setOpen] = useState(false)

    const handleOptions = (e) => {
      console.log('Options');
        setOpen(current => !current)
    }

  return (
    <span
        className=' relative'
        onClick={handleOptions}
    >
      <Dots />
      { open && <Popup 
                  idTask={idTask} 
                  tasks={tasks} 
                  setTasks={setTasks} 
                />
      }
    </span>
  )
}
