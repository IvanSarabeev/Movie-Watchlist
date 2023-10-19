import React, { useId } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as IconCircleMinus } from "../assets/svgs/minus-circle.svg";
import "react-toastify/dist/ReactToastify.css";
import { IMovieExtended } from "../models/model";

type RemoveWatchlistProps = {
  item: IMovieExtended;
  // removeFromCollection: (imdbIDToRemove: string) => void;
};

const RemoveWatchlist = ({
  item,
}: // removeFromCollection,
RemoveWatchlistProps) => {
  const customToastId = useId();

  const notify = () =>
    toast.error(`You have removed the film:\n ${item} from the collection!`, {
      toastId: customToastId,
      pauseOnHover: true,
      theme: "dark",
    });

  // const handleSuccessRemove = (imdbID: string) => {
  //   if (removeFromCollection) {
  //     removeFromCollection(imdbID);
  //   }
  //   notify();
  // };
  notify();
  return (
    <>
      <button
        type="button"
        // onClick={() => {
        //   handleSuccessRemove(item.imdbID);
        // }}
        className="absolute top-[2.5%] right-[2.5%] hover:bg-gradient-to-tr from-slate-400 to-sky-800 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        <IconCircleMinus className="h-6 w-6 text-white" />
      </button>
      <ToastContainer />
    </>
  );
};

export default RemoveWatchlist;
