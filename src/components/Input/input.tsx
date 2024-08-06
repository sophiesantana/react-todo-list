interface ButtonProps {
  customClass?: string;
}

export default function Input({ customClass }: ButtonProps) {
  return (
    <input type="text" name="" id="" placeholder="Adicione uma nova tarefa" className={customClass} />
  )
}