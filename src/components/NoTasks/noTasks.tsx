import Container from "../Container/container";
import InfoTasks from "../InfoTasks/infoTasks";

export default function NoTasks() {
  return (
    <>
      <InfoTasks totalDone={0} tasks={[]}/>
      <Container customClass="w-full">
        <Container customClass="flex flex-col justify-between items-center rounded-lg border-t border-text text-input font-font-source-sans">
          <img src="./assets/images/Clipboard.png" alt="" className="mb-2 mt-16"/>
          <p className="font-bold font-16 leading-22">Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </Container>
      </Container>
    </>
  )
}