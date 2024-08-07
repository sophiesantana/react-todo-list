import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input type="text" name="" id="" placeholder="Adicione uma nova tarefa" ref={ref} {...props} />
  )
})

export default Input;
