import starIcon from "../../assets/images/icon-star.svg";
import Number from "./Number/Number";
import SubmitButton from "./Submit-Button/SubmitButton";
import "./Rate.scss";

export default function Rate() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="rate">
      <div className="star">
        <img src={starIcon} alt="" />
      </div>

      <h2 className="question">How did we do?</h2>

      <p className="desc">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="numbers">
        {numbers.map((number, index) => {
          return <Number key={index} number={number} />;
        })}
      </div>

      <SubmitButton />
    </div>
  );
}
