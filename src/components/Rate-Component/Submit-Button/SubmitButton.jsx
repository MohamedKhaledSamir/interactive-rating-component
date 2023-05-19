import "./SubmitButton.scss";
import { AppContext } from "../../../App";
import { useContext } from "react";

export default function SubmitButton() {
  const { setShowThanks, selectedNumber } = useContext(AppContext);
  return (
    <div
      onClick={() => selectedNumber != null && setShowThanks(true)}
      className="submit-btn"
    >
      SUBMIT
    </div>
  );
}
