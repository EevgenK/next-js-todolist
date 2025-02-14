interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return <p className="text-center">{text}</p>;
};

export default ErrorMessage;
