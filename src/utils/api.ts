import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/todos";

interface PostTodo {
  userId: number;
  title: string;
  completed: boolean;
}
export const getTodosList = async (page: number = 10) => {
  try {
    const { data } = await axios.get(`${baseUrl}`, {
      params: {
        _limit: page,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id: number) =>
  await axios.delete(`${baseUrl}/${id}`);

export const postTodo = async (payload: PostTodo) => {
  const { data } = await axios.post(`${baseUrl}`, payload);
  return data;
};
