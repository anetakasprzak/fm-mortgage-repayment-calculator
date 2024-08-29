import "./App.styled";
import {
  Wrapper,
  Form,
  ClearBtn,
  Results,
  CalculateBtn,
  CalculateBtnText,
} from "./App.styled";

function App() {
  return (
    <Wrapper>
      <FormComponent />
      <ResultsComponent />
    </Wrapper>
  );
}

function FormComponent() {
  return (
    <Form>
      <div>
        <h1>Mortgage Calculator</h1>
        <ClearBtn>Clear All</ClearBtn>
      </div>

      <div>
        <label>Mortgage Amount</label>
        <div>
          <input />
          <span>£</span>
        </div>
      </div>

      <div>
        <label>Mortgage Term</label>
        <div>
          <input />
          <span>years</span>
        </div>
      </div>

      <div>
        <label>Interest Rate</label>
        <div>
          <input />
          <span>%</span>
        </div>
      </div>

      <div>
        <label>Mortgage Type</label>
        <div>
          <input type="radio" name="type" />
          <span>Repayment</span>
        </div>
        <div>
          <input type="radio" name="type" />
          <span>Interest Only</span>
        </div>
      </div>

      <CalculateBtn>
        <img src="/icon-calculator.svg" />
        <CalculateBtnText>Calculate Repayments</CalculateBtnText>
      </CalculateBtn>
    </Form>
  );
}

function ResultsComponent() {
  return <Results>Results</Results>;
}

export default App;
