import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw Error("useStateContext must be used inside a StateContextProvider");
  }
  return context;
};
