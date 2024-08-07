import Button from './components/Button/button'
import Container from './components/Container/container'
import Header from './components/Header/header'
import Input from './components/Input/input'
import NoTasks from './components/NoTasks/noTasks'
import './global.css'
import ListTasks from './components/List/list'
import { useState } from 'react'
import { useTasksQuery } from './hooks/queries/tasks'
import { useCreateTaskMutation } from './hooks/mutations/tasks'

function App() {
  const [task, setTasks] = useState('');

  const { data: tasks, isLoading, isError } = useTasksQuery();

  const { mutate: createTaskMutation } = useCreateTaskMutation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    createTaskMutation(task);
  }

  if (isLoading) return 'Carregando...';

  if (isError) return 'Opa, algo deu errado...';

  return (
    <>
      <Container customClass='bg-background w-full h-screen'>
        <Header />
        <Container customClass='w-full flex justify-center'>
          <Container customClass='flex w-736 h-14 mt-72'>
            <Input
              className='w-641 rounded-lg mr-3 bg-input-bg text-input px-5'
              value={task}
              onChange={(event) => setTasks(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              customClass='flex rounded-lg bg-white text-info font-bold justify-center items-center justify-around w-85 px-2'
              onClick={() => createTaskMutation(task)}
            >
              Criar
              <img src="./assets/images/plus.png" alt="" />
            </Button>
          </Container>
        </Container>
        <Container customClass='w-full flex justify-center'>
          <Container customClass='w-736 h-287 mt-72'>
            {tasks?.length ? <ListTasks tasks={tasks} /> : <NoTasks />}
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default App
