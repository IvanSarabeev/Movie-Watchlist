import React, { useId } from "react";
import "react-toastify/dist/ReactToastify.css";
import { IMovieExtended } from "../models/model";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as IconCircleMinus } from "../assets/svgs/minus-circle.svg";

type RemoveItemProps = {
  item: IMovieExtended;
  removeItemFromCollection: (imdbID: string) => void;
};

const RemoveItem = ({ item, removeItemFromCollection }: RemoveItemProps) => {
  const customToastId = useId();

  const handleSuccses = () => {
    if (removeItemFromCollection) {
      removeItemFromCollection(item.imdbID);
      toast.success(`You have removed ${item.Title} successfully.`, {
        position: "bottom-right",
        toastId: customToastId,
        pauseOnHover: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSuccses}
        className="w-auto h-auto mr-0 flex hover:bg-gradient-to-tr from-slate-400 to-sky-800 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        Remove
        <IconCircleMinus className="h-6 w-6 text-slate-950 md:text-slate-300" />
      </button>
      <ToastContainer />
    </>
  );
};

export default RemoveItem;
