import React, { useId } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { ReactComponent as IconCirclePlus } from "../assets/svgs/plus-circle.svg";

type WatchListProps = {
  movieInfo: string;
  handleAddToCollection: () => void;
};

const AddToWatchlist = ({
  movieInfo,
  handleAddToCollection,
}: WatchListProps) => {
  const customToastId = useId();

  const notify = (response: string) => {
    if (response === "Yes") {
      toast.success(
        `You have added the film:\n ${movieInfo} to your collection!`,
        {
          position: "bottom-right",
          toastId: customToastId,
          pauseOnHover: true,
          theme: "dark",
        }
      );
    } else {
      throw new Error(`Unexpected error occured: ${Error}`);
    }
  };

  const handleSuccess = (response: string) => {
    if (handleAddToCollection) {
      handleAddToCollection();
      notify(response);
    } else {
      notify(response);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (typeof handleSuccess === "function") {
            handleSuccess("Yes");
          } else {
            toast.error(`You can't remove the item.`, {
              toastId: customToastId,
              pauseOnHover: true,
              theme: "dark",
            });
          }
        }}
        className="group absolute top-[2.5%] right-[2.5%] hover:bg-gradient-to-tr from-slate-400 to-sky-800 hover:rounded-md hover:p-0.5 hover:text-white transition-all ease-in-out"
      >
        <IconCirclePlus className="h-6 w-6 text-slate-800 group-hover:text-white" />
      </button>
      <ToastContainer />
    </>
  );
};

export default AddToWatchlist;
