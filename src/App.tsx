import "./App.styled";
import {
  Wrapper,
  HeaderBox,
  Header,
  Form,
  ClearBtn,
  Results,
  CalculateBtn,
  CalculateBtnText,
  InputAmount,
  InputBoxAmount,
  AmountSpan,
  AmountLabelInputBox,
  AmountLabel,
  TermLabelInputBox,
  TermLabel,
  InputBoxTerm,
  InputTerm,
  TermSpan,
  RateLabelInputBox,
  RateLabel,
  InputBoxRate,
  InputRate,
  RateSpan,
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
      <HeaderBox>
        <Header>Mortgage Calculator</Header>
        <ClearBtn>Clear All</ClearBtn>
      </HeaderBox>

      <AmountLabelInputBox>
        <AmountLabel>Mortgage Amount</AmountLabel>
        <InputBoxAmount>
          <InputAmount />
          <AmountSpan>£</AmountSpan>
        </InputBoxAmount>
      </AmountLabelInputBox>

      <TermLabelInputBox>
        <TermLabel>Mortgage Term</TermLabel>
        <InputBoxTerm>
          <InputTerm />
          <TermSpan>years</TermSpan>
        </InputBoxTerm>
      </TermLabelInputBox>

      <RateLabelInputBox>
        <RateLabel>Interest Rate</RateLabel>
        <InputBoxRate>
          <InputRate />
          <RateSpan>%</RateSpan>
        </InputBoxRate>
      </RateLabelInputBox>

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
