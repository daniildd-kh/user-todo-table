import useFetch from '../../../hooks/useFetch';
import { IUser, ITodo } from '../types';

const baseUrl = process.env.API_URL;

export const useTableData = () => {
  const {
    data: users,
    isLoading: loadingUsers,
    error: userError,
  } = useFetch<IUser[]>(`${baseUrl}/users`);

  const {
    data: todos,
    isLoading: loadingTodos,
    error: todoError,
  } = useFetch<ITodo[]>(`${baseUrl}/todos`);

  const userTaskCount: { [key: number]: number } = {};
  todos?.forEach((todo) => {
    if (userTaskCount[todo.userId]) {
      userTaskCount[todo.userId]++;
    } else {
      userTaskCount[todo.userId] = 1;
    }
  });

  return {
    users,
    todos,
    loading: loadingUsers || loadingTodos,
    error: userError || todoError,
    userTaskCount,
  };
};
