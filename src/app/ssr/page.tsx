import MainTitle from "@/components/MainTitle/MainTitle";
import TodoSsr from "./components/TodoSsr/TodoSsr";

const SsrTodoPage = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <MainTitle text="Here is empty now, but will come soon!" />
      <TodoSsr />
    </main>
  );
};

export default SsrTodoPage;
