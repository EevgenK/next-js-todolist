interface MainTitleProps {
  text: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ text }) => {
  return (
    <h1 className="text-xl text-center sm:text-2xl uppercase max-w-lg mx-auto ">
      {text}
    </h1>
  );
};

export default MainTitle;
