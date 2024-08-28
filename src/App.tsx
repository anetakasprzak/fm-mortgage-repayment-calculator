import "./App.styled";
import { Wrapper, Form, Results } from "./App.styled";

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
        <button>Clear All</button>
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

      <button>
        <img src="/icon-calculator.svg" />
        <p>Calculate Repayments</p>
      </button>
    </Form>
  );
}

function ResultsComponent() {
  return <Results>Results</Results>;
}

export default App;
