import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import CalcProvider from "./context/CalcContext";
import "./Calculator.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Calculator() {
  return (
    <div className="calculator">
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default Calculator;
