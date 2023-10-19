import React, { useId } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as IconCirclePlus } from "../assets/svgs/plus-circle.svg";
import "react-toastify/dist/ReactToastify.css";

type WatchListProps = {
  movieInfo: string;
  handleAddToWatchlist?: () => void;
};

const Watchlist = ({ handleAddToWatchlist, movieInfo }: WatchListProps) => {
  const customToastId = useId();

  const notify = () =>
    toast.success(
      `You have added the film:\n ${movieInfo} to your collection!`,
      {
        toastId: customToastId,
        pauseOnHover: true,
        theme: "dark",
      }
    );

  const handleSuccess = () => {
    if (handleAddToWatchlist) {
      handleAddToWatchlist();
    }
    notify();
  };
  return (
    <>
      <button
        type="button"
        onClick={handleSuccess}
        className="absolute top-[2.5%] right-[2.5%] hover:bg-gradient-to-tr from-slate-400 to-sky-800 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        <IconCirclePlus className="h-6 w-6 text-white" />
      </button>
      <ToastContainer />
    </>
  );
};

export default Watchlist;
