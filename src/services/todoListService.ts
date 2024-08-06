import { Tasks } from "../interfaces/todoListInterface";
import api from "./api";


export const getTasks = (): Promise<Tasks[]> => {
  return api.get<Tasks[]>('/todo-list')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Erro ao buscar tasks:', error);
      return [];
    });
}

export const createTask = (task: Tasks): Promise<void> => {
  return api.post('/todo-list', task)
    .then(() => {
      console.log('Task registrada com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao registrar task:', error);
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