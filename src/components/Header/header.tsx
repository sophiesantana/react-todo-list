import Container from "../Container/container";
import Title from "../Title/title";

export default function Header() {
  return (
    <>
      <Container customClass="flex">
        <Title customClass="text-white flex w-full h-12 justify-center items-center font-jua font-normal text-40 leading-50 mt-72">
          <img
            src="./assets/images/Vector.png"
            alt="imagem de uma peça de puzzle"
            className="w-7 h-7 mr-3"
        />
          To-do List
        </Title>
      </Container>
    </>
  )
}