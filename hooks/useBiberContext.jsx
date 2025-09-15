import { useContext } from "react";
import { BiberContext } from "../context/BiberContext";

export const useBiberContext = () => {
  const context = useContext(BiberContext);

  if (!context) {
    throw Error("useBiberContext must be used inside a BiberContextProvider");
  }
  return context;
};
