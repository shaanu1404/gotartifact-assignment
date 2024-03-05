import LoadingSpinner from "./LoadingSpinner";

const Button = (props) => {
  const { onClick, children, type, showLoading } = props;
  return (
    <button
      type={type ?? "button"}
      className="inline-flex items-center space-x-1 text-center text-sm text-white font-medium tracking-wide capitalize px-6 py-2 rounded-sm bg-blue-800 shadow-md shadow-blue-500/40 disabled:bg-gray-400 disabled:shadow-none"
      onClick={onClick}
      disabled={showLoading}
    >
      {showLoading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
