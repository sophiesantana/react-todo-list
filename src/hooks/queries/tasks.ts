import { queryOptions, useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/todoListService";

export const tasksQuery = queryOptions({
  queryKey: ['tasks'],
  queryFn: () => getTasks(),
})

export const useTasksQuery = () => useQuery(tasksQuery);