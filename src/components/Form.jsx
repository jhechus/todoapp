import React, { useState } from 'react'
import Text from './Icons/Text'

export default function Form({ dateM, tasks, setTasks}) {

  const [val,setVal] = useState('')

  const handleinput = (e) => {
    e.preventDefault()

    const newtask = {
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false
    }

    setTasks([...tasks, newtask])

    setVal('')


  }


  return (
    <section className=' max-w-[450px] m-auto my-3 px-4'>
      <div className=' border border-black rounded bg-gray04 flex items-center p-2'>
        <span className=' text-gray02 mr-2'> <Text /> </span>
        <form 
          onSubmit={handleinput}
          className=' w-full'>
            <input 
                className=' w-full bg-transparent outline-none' 
                type="text"
                placeholder='Añade tarea...' 
                value={val}
                onChange={e=> setVal(e.target.value)}
            />
        </form>
        
      </div>
    </section>
  )
}
