import { useEffect, useState } from 'react'
import Button from './components/Button/button'
import Container from './components/Container/container'
import Header from './components/Header/header'
import Input from './components/Input/input'
import NoTasks from './components/NoTasks/noTasks'
import './global.css'
import { Tasks } from './interfaces/todoListInterface'
import { getTasks } from './services/todoListService'
import ListTasks from './components/List/list'

function App() {
  //const [tasks, setTasks] = useState<Tasks[]>();
  const [tasks, setTasks] = useState(1);

  /* useEffect(() => {
    getTasks()
      .then((resp) => setTasks(resp));
  }); */

  return (
    <>
      <Container customClass='bg-background w-full h-screen'>
        <Header />
        <Container customClass='w-full flex justify-center'>
          <Container customClass='flex w-736 h-14 mt-72'>
            <Input customClass='w-641 rounded-lg mr-3 bg-input-bg text-input px-5'/>
            <Button
              customClass='flex rounded-lg bg-white text-info font-bold justify-center items-center justify-around w-85 px-2'
            >
              Criar
              <img src="./assets/images/plus.png" alt="" />
            </Button>
          </Container>
        </Container>
        <Container customClass='w-full flex justify-center'>
          <Container customClass='w-736 h-287 mt-72'>
            { tasks ? <ListTasks /> : <NoTasks /> }
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default App
