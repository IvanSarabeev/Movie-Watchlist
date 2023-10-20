import React, { useId } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

type ButtonProps = {
  movieInfo?: string;
  customClassName?: string;
  children: React.ReactNode;
  handleSearch?: () => void;
  handleAddToCollection?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  customClassName,
  handleAddToCollection,
  movieInfo,
  disabled,
}: ButtonProps) => {
  const className = customClassName;

  const customToastId = useId();

  const handleAddSuccess = () => {
    if (handleAddToCollection && !disabled) {
      handleAddToCollection();
      toast.success(`Added to Collection:\n${movieInfo}`, {
        position: "bottom-right",
        toastId: customToastId,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className={`${className} ${
          disabled && customToastId ? "cursor-not-allowed" : ""
        }`}
        onClick={handleAddSuccess}
      >
        {children}
      </button>
      <ToastContainer />
    </>
  );
};

export default Button;
