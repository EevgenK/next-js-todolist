import { Todo } from "../Todos";
import TodoItem from "../TodoItem/TodoItem";
interface TodoListProps {
  items: Todo[];
  remove: (id: number) => void;
  change: (id: number) => void;
}

const TodoList = ({ items, remove, change }: TodoListProps) => {
  return (
    <ul className="flex gap-2 flex-col">
      {...items.map((todo) => (
        <TodoItem
          onDelete={remove}
          key={todo.id}
          item={todo}
          getItemChange={change}
        />
      ))}
    </ul>
  );
};

export default TodoList;
