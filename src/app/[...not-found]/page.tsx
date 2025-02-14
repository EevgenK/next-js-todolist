import MainTitle from "@/components/MainTitle/MainTitle";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <MainTitle text="Sorry my Lord, but this page does not exist" />
    </main>
  );
};

export default NotFoundPage;
