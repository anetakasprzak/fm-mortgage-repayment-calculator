import "./App.styled";
import {
  Wrapper,
  HeaderBox,
  Header,
  Form,
  ClearBtn,
  EmptyResultsBox,
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
  InputsRadioBox,
  LabelMortgageType,
  RepaymentInputBox,
  InputRepayment,
  RepaymentText,
  InterestInputBox,
  InputInterest,
  InterestText,
  ImgEmptyResults,
  HeadingEmptyResults,
  TextEmptyResults,
  ResultsSection,
  HeadingResults,
  ResultsText,
  CalculatedBox,
  RepaymentCalcBox,
  RepaymentCalcText,
  RepaymentNumber,
  TermCalcBox,
  TermCalcText,
  TermNumber,
} from "./App.styled";

import { useForm } from "react-hook-form";

function App() {
  return (
    <Wrapper>
      <FormComponent />
      <EmptyResultsComponent />
      {/* <CalculatedResults /> */}
    </Wrapper>
  );
}

interface FormValues {
  amount: string;
  term: string;
  rate: string;
  type: string;
}

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      amount: "",
      term: "",
      rate: "",
      type: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderBox>
        <Header>Mortgage Calculator</Header>
        <ClearBtn>Clear All</ClearBtn>
      </HeaderBox>

      <AmountLabelInputBox>
        <AmountLabel>Mortgage Amount</AmountLabel>
        <InputBoxAmount>
          <InputAmount
            type="text"
            {...register("amount", { required: true })}
          />
          <AmountSpan>£</AmountSpan>
        </InputBoxAmount>
      </AmountLabelInputBox>

      <TermLabelInputBox>
        <TermLabel>Mortgage Term</TermLabel>
        <InputBoxTerm>
          <InputTerm type="text" {...register("term", { required: true })} />
          <TermSpan>years</TermSpan>
        </InputBoxTerm>
      </TermLabelInputBox>

      <RateLabelInputBox>
        <RateLabel>Interest Rate</RateLabel>
        <InputBoxRate>
          <InputRate type="text" {...register("rate", { required: true })} />
          <RateSpan>%</RateSpan>
        </InputBoxRate>
      </RateLabelInputBox>

      <InputsRadioBox>
        <LabelMortgageType>Mortgage Type</LabelMortgageType>
        <RepaymentInputBox>
          <InputRepayment type="radio" name="type" />
          <RepaymentText>Repayment</RepaymentText>
        </RepaymentInputBox>
        <InterestInputBox>
          <InputInterest type="radio" name="type" />
          <InterestText>Interest Only</InterestText>
        </InterestInputBox>
      </InputsRadioBox>

      <CalculateBtn>
        <img src="/icon-calculator.svg" />
        <CalculateBtnText>Calculate Repayments</CalculateBtnText>
      </CalculateBtn>
    </Form>
  );
}

function EmptyResultsComponent() {
  return (
    <EmptyResultsBox>
      <ImgEmptyResults src="../public/illustration-empty.svg" />
      <HeadingEmptyResults>Results shown here</HeadingEmptyResults>
      <TextEmptyResults>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </TextEmptyResults>
    </EmptyResultsBox>
  );
}

function CalculatedResults() {
  return (
    <ResultsSection>
      <HeadingResults>Your results</HeadingResults>
      <ResultsText>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </ResultsText>
      <CalculatedBox>
        <RepaymentCalcBox>
          <RepaymentCalcText>Your monthly repayments</RepaymentCalcText>
          <RepaymentNumber>£1,797.74</RepaymentNumber>
        </RepaymentCalcBox>
        <TermCalcBox>
          <TermCalcText>Total you'll repay over the term</TermCalcText>
          <TermNumber>£539,322.94</TermNumber>
        </TermCalcBox>
      </CalculatedBox>
    </ResultsSection>
  );
}

export default App;
