import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface AddBarProps {
  getValue: (todo: string) => void;
}
const AddBar = ({ getValue }: AddBarProps) => {
  const [todo, setTodo] = useState<string>("");

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.input;
    if (value.trim() === "") {
      setTodo("");
      toast.error("Please type your todo first. This field can`t be empty");
      return;
    }
    getValue(value);
    setTodo("");
  };
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTodo(value);
  };
  return (
    <form className="flex flex-col gap-8 sm:flex-row" onSubmit={onHandleSubmit}>
      <input
        onChange={onHandleChange}
        type="text"
        name="input"
        placeholder="Type here"
        className="input input-bordered input-info w-full max-w-xs"
        autoComplete="off"
        value={todo}
      />

      <button type="submit" className="btn btn-accent">
        Add todo
      </button>
    </form>
  );
};

export default AddBar;
