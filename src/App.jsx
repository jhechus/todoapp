import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTask from './components/ListTask'
import Month from './components/Mont'
import Week from './components/Week'
import Year from './components/Year'

function App() {
  const [dateM, setDateM] = useState(new Date())

  const data = JSON.parse(localStorage.getItem('tasks'))

  const [tasks, setTasks] = useState(data ? data : [])
  const [tab, setTab] = useState('day')

  //console.log(tasks);

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks])

  return (
    <main>
      <div className=' bg-gray03 text-white rounded max-w-[600px] m-auto'>
       <Header tab={tab} setTab={setTab}/>
       {
        tab === 'day' && <>
          <Day dateM={dateM} setDateM={setDateM} />
          <Form 
            dateM={dateM}
            tasks={tasks}
            setTasks={setTasks}
          />
          <ListTask
            tasks={tasks}
            setTasks={setTasks}
            dateM={dateM}
          />
        </>
       }
       { tab === 'week' && <Week tasks={tasks}/> }
       { tab === 'month' && <Month tasks={tasks} /> }
       { tab === 'year' && <Year tasks={tasks} /> }
      </div>
    </main>
  )
}

export default App
