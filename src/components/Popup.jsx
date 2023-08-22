import { deleteTask } from "../helpers/deleteTask";

export default function Popup({ idTask, tasks, setTasks}) {

    const handleDelete = (tasks,idTask,e) => {
        e.stopPropagation()
        console.log('popup');
        setTasks(deleteTask(tasks, idTask))
    }

  return (
    <div className='popup_delete bg-gray06 p-2 rounded absolute right-0 top-[25px] w-[100px] z-10'>
      <p
        onClick={e => handleDelete(tasks, idTask, e)}
      >     
      Eliminar
      </p>
    </div>
  )
}
