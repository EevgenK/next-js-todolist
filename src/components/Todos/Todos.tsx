"use client";
import toast from "react-hot-toast";
import { deleteTodo, getTodosList, postTodo } from "@/utils/api";
import TodoList from "./TodoList/TodoList";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import AddBar from "../AddBar/AddBar";
import MainTitle from "../MainTitle/MainTitle";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [deleteTodoId, setDeleteTodoID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const results = await getTodosList();
        setTodoList((prevList) => [...prevList, ...results]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    if (deleteTodoId) {
      const deleteTodos = async (id: number) => {
        try {
          await deleteTodo(id);
          setTodoList((prev) => prev.filter((todo) => todo.id !== id));
          toast.success("The 'todo' was successfully deleted");
        } catch (error) {
          console.log(error);
          toast.error(
            "Something went wrong. Don`t panic we`re already working on it!"
          );
        } finally {
          setDeleteTodoID(0);
        }
      };
      deleteTodos(deleteTodoId);
    }
    if (newTodo !== "") {
      const createTodo = async (str: string) => {
        try {
          const payload = { userId: 1, title: str, completed: false };
          const result = await postTodo(payload);
          setTodoList((prev) => [result, ...prev]);
          toast.success("Your 'todo' was successfully added");
        } catch (error) {
          console.log(error);
          toast.error(
            "Something went wrong. Don`t panic we`re already working on it!"
          );
        } finally {
          setNewTodo("");
        }
      };
      createTodo(newTodo);
    }
  }, [newTodo, todoList, deleteTodoId]);

  const changeTodoStatus = (id: number) => {
    setTodoList((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  return (
    <section className="flex flex-col gap-6 justify-center items-center">
      <MainTitle text="Todo List generated by CSR" />
      <AddBar getValue={setNewTodo} />
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <TodoList
          items={todoList}
          remove={setDeleteTodoID}
          change={changeTodoStatus}
        />
      ) : (
        <ErrorMessage text="Sorry my Lord, something went wrong. But we are already working to fix it!" />
      )}
    </section>
  );
};

export default Todos;
