import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as IconCircleMinus } from "../assets/svgs/minus-circle.svg";
import { IMovieExtended } from "../models/model";

type RemoveItemProps = {
  item: IMovieExtended;
  removeItemFromCollection: (imdbID: string) => void;
};

const RemoveItem = ({ item, removeItemFromCollection }: RemoveItemProps) => {
  const handleSuccses = () => {
    const notify = () => {
      toast.success(`You have removed ${item.Title} successfully.`);
    };

    if (removeItemFromCollection) {
      removeItemFromCollection(item.imdbID);
      notify();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSuccses}
        className="absolute top-[2.5%] right-[2.5%] hover:bg-gradient-to-tr from-slate-400 to-sky-800 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        <IconCircleMinus className="h-6 w-6 text-white" />
      </button>
      <ToastContainer />
    </>
  );
};

export default RemoveItem;
