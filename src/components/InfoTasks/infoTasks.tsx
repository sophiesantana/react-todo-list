import Container from "../Container/container";

export default function InfoTasks() {
  return (
    <>
    <Container customClass="flex w-full justify-between items-center h-5 mb-5 text-info font-bold">
      <Container customClass="flex">
        <p className="mr-2">Tarefas Criadas</p>
        <div className="bg-input-bg w-6 rounded-full text-white font-bold flex justify-center items-center">0</div>
      </Container>
      <Container customClass="flex">
        <p className="mr-2">Concluídas</p>
        <div className="bg-input-bg w-6 rounded-full text-white font-bold flex justify-center items-center">0</div>
      </Container>
    </Container>
    </>
  )
}