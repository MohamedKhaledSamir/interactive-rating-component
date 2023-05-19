import illustration from "../../assets/images/illustration-thank-you.svg";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Thanks.scss";
export default function Thanks() {
  const { selectedNumber } = useContext(AppContext);

  return (
    <div className="thanks">
      <img src={illustration} alt="thank you illustration" />

      <div className="brevity">You selected {selectedNumber} out of 5</div>

      <h2 className="thanks-heading">Thank You!</h2>
      <p className="desc">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
