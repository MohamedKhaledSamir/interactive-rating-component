import "./Number.scss";
import { AppContext } from "../../../App";
import { useContext } from "react";

export default function Number({ number }) {
  const { selectedNumber, setSelectedNumber } = useContext(AppContext);

  return (
    <div
      onClick={() => {
        setSelectedNumber(number);
      }}
      className={selectedNumber == number ? "number active" : "number"}
    >
      {number}
    </div>
  );
}
