import { useMutation } from "@tanstack/react-query";
import { createTask, deleteTaskById, updateTaskById } from "../../services/todoListService";
import { queryClient } from "../../main";
import { Tasks } from "../../interfaces/todoListInterface";
import { tasksQuery } from "../queries/tasks";

export const useCreateTaskMutation = () => useMutation({
  mutationFn: (taskName: string) => createTask(taskName),
  onMutate: (taskName) => {
    const previousTasks = queryClient.getQueryData(tasksQuery.queryKey);
    queryClient.setQueryData(tasksQuery.queryKey, (old) => [...old!, {id: String(new Date()), name: taskName, done: false}])
    return { previousTasks };
  },
  onSettled: () => {
    return queryClient.invalidateQueries({
      queryKey: tasksQuery.queryKey,
    })
  },
  onError: (_error, _variables, context) => {
    queryClient.setQueryData(tasksQuery.queryKey, context?.previousTasks)
  }
})

export const useToggleDoneTaskMutation = () => useMutation({
  mutationFn: (task: Tasks) => updateTaskById(task),
  onMutate: async (updatedTask) => {
    await queryClient.cancelQueries({
      queryKey: tasksQuery.queryKey,
    });
    const previousTasks = queryClient.getQueryData(tasksQuery.queryKey);
    queryClient.setQueryData(tasksQuery.queryKey, (old) => 
      old?.map(task =>
        task.id === updatedTask.id ? { ...task, done: !task.done } : task
      )
    );

    return { previousTasks };
  },
  onError: (_error, _variables, context) => {
    queryClient.setQueryData(tasksQuery.queryKey, context?.previousTasks);
  },
  onSettled: () => {
    queryClient.invalidateQueries({
      queryKey: tasksQuery.queryKey,
    });
  }
});

export const useDeleteTaskMutation = () => useMutation({
  mutationFn: (task: Tasks) => deleteTaskById(task.id),
  onMutate: (deletedTask) => {
    const previousTasks = queryClient.getQueryData(tasksQuery.queryKey);
    queryClient.setQueryData(tasksQuery.queryKey, (old) => old?.filter(task => task.id !== deletedTask.id))
    return { previousTasks };
  },
  onSettled: () => {
    return queryClient.invalidateQueries({
      queryKey: tasksQuery.queryKey,
    })
  },
  onError: (_error, _variables, context) => {
    queryClient.setQueryData(tasksQuery.queryKey, context?.previousTasks)
  }
})