import { ChangeEvent, MouseEvent, useState } from "react";
import { Todo } from "../Todos";

interface TodoItemProps {
  onDelete: (id: number) => void;
  item: Todo;
  getItemChange: (id: number) => void;
}

const TodoItem = ({ item, onDelete, getItemChange }: TodoItemProps) => {
  const [show, setShow] = useState(false);

  const onButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const { action } = target.dataset;
    switch (action) {
      case "view":
        setShow((prev) => !prev);
        break;
      case "delete":
        onDelete(item.id);
        break;
      default:
        return;
    }
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    getItemChange(+id);
  };

  const idToStringType = item.id + "";
  return (
    <li className="text-2xl ml-5 border-2 rounded-l p-4 flex flex-col gap-2">
      <label
        htmlFor={idToStringType}
        className="first-letter:uppercase cursor-pointer w-fit"
      >
        {item.title}.{" "}
        {show && (
          <span className="text-blue-400">User Id is: {item.userId}</span>
        )}
      </label>
      <div className="flex gap-2 items-center" onClick={onButtonClick}>
        <input
          id={idToStringType}
          className="checkbox checkbox-success min-h-8 h-8 min-w-8 w-8"
          onChange={onHandleChange}
          data-action="toggle"
          type="checkbox"
          checked={item.completed}
        />
        <button
          title="Click to view user Id"
          data-action="view"
          className="btn btn-outline btn-accent rounded-xl box-content min-h-8 h-8"
        >
          {show ? "hide" : "view"}
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
};

export default TodoItem;
