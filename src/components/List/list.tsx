import { useMemo } from "react";
import Container from "../Container/container";
import InfoTasks from "../InfoTasks/infoTasks";
import { Tasks } from "../../interfaces/todoListInterface";
import { useDeleteTaskMutation, useToggleDoneTaskMutation } from "../../hooks/mutations/tasks";

interface ListTasksProps {
  tasks: Tasks[];
}

export default function ListTasks({ tasks }: ListTasksProps) {
  const totalDone = useMemo(() => {
    return Object.values(tasks).filter(task => task.done).length
  }, [tasks]);

  const { mutate: toggleDoneTaskMutation } = useToggleDoneTaskMutation();
  
  const { mutate: deleteTaskMutation } = useDeleteTaskMutation();

  return (
    <>
      <InfoTasks totalDone={totalDone} tasks={tasks}/>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={
                `w-736 h-14 bg-task mb-2 rounded-lg flex justify-between items-center
                ${task.done ? 'line-through text-input' : 'text-task-name'}`
              }
            >
              <Container customClass="flex">
                <button onClick={() => toggleDoneTaskMutation(task)}>
                  <img src={`./assets/images/${task.done ? 'checked' : 'circle'}.png`}
                  alt=""
                  className="size-7 mx-5"/>
                </button>
                {task.name}
              </Container>
              <button onClick={() => deleteTaskMutation(task)}>
                <img src="./assets/images/trash.png" alt="" className="size-7 mx-5"/>
              </button>
            </li>
          ))}
        </ul>
    </>
  )
}