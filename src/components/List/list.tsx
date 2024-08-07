import { useState } from "react";
import Container from "../Container/container";
import InfoTasks from "../InfoTasks/infoTasks";

export default function ListTasks() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const [done, setDone] = useState<{ [key: number]: boolean }>({});

  const handleClick = (index: number) => {
    setDone((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <>
      <InfoTasks />
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={
                `w-736 h-14 bg-task mb-2 rounded-lg flex justify-between items-center
                ${done[index] ? 'line-through text-input' : 'text-task-name'}`
              }
            >
              <Container customClass="flex">
                <button onClick={() => handleClick(index)}>
                  <img src={`./assets/images/${done[index] ? 'checked' : 'circle'}.png`}
                  alt=""
                  className="size-7 mx-5"/>
                </button>
                {item}
              </Container>
              <img src="./assets/images/trash.png" alt="" className="size-7 mx-5"/>
            </li>
          ))}
        </ul>
    </>
  )
}