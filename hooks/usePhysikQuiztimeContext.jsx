import { useContext } from "react";
import { PhysikQuiztimeContext } from "../context/PhysikQuiztimeContext";

export const usePhysikQuiztimeContext = () => {
  const context = useContext(PhysikQuiztimeContext);

  if (!context) {
    throw Error("usePhysikQuiztimeContext must be used inside a PhysikQuiztimeProvider");
  }
  return context;
};
