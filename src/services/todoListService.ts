import { Tasks } from "../interfaces/todoListInterface";
import api from "./api";

export const getTasks = (): Promise<Tasks[]> => {
  return api.get<Tasks[]>('/todo-list')
    .then((response) => response.data);
}

export const createTask = (name: string): Promise<void> => {
  const task = { name };
  return api.post('/todo-list', task)
    .then(() => {
      console.log('Task registrada com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao registrar task:', error);
    });
}

export const updateTaskById = (task: Tasks) => {
  return api.patch(`/todo-list/${task.id}`, { done: !task.done })
    .then(() => {
      console.log('Task atualizada com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao atualizar task:', error);
    });
}

export const deleteTaskById = (id: string) => {
  return api.delete<Tasks>(`/todo-list/${id}`)
    .then(() => {
      console.log('Task excluida com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao excluir task:', error);
    });
}