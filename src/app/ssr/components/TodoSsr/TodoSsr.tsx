import { Todo } from "@/components/Todos/Todos";
import { deleteTodo, getTodosList } from "@/utils/api";
import { delayed } from "@/utils/delay";

const TodoSsr = async () => {
  const todos = await delayed(getTodosList(), {
    timeout: 1500,
  });

  return (
    <ul className="flex gap-2 flex-col">
      {todos.map((todo: Todo) => {
        return (
          <li
            key={todo.id}
            className="text-2xl ml-5 border-2 rounded-l p-4 flex flex-col gap-2"
          >
            <label
              htmlFor={todo.id + ""}
              className="first-letter:uppercase cursor-pointer w-fit"
            >
              {todo.title}.
            </label>
            <div
              className="flex gap-2 items-center" /*onClick={onButtonClick}*/
              //   onClick={() => deleteTodo(todo.id)}
            >
              <input
                id={todo.id + ""}
                className="checkbox checkbox-success min-h-8 h-8 min-w-8 w-8"
                // onChange={onHandleChange}

                data-action="toggle"
                type="checkbox"
                // checked={todo.completed}
              />
              <button
                title="Click to view user Id"
                data-action="view"
                className="btn btn-outline btn-accent rounded-xl box-content min-h-8 h-8"
              >
                view
                {/* {show ? "hide" : "view"} */}
              </button>
              <button
                title="Click to delete"
                data-action="delete"
                className="btn btn-outline btn-secondary rounded-xl box-content min-h-8 h-8"
                type="button"
              >
                x
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoSsr;
