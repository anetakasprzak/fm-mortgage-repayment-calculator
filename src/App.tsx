import { useState } from "react";
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
  TwoInputsFlex,
  TermNumber,
} from "./App.styled";

import { useForm } from "react-hook-form";

function App() {
  const [formData, setFormData] = useState<FormValues>();

  return (
    <Wrapper>
      <FormComponent setFormData={setFormData} />
      {/* <EmptyResultsComponent /> */}
      <CalculatedResults />
    </Wrapper>
  );
}

interface FormValues {
  amount: string;
  term: string;
  rate: string;
  type: string;
}

interface FormComponentProps {
  setFormData: React.Dispatch<React.SetStateAction<FormValues | undefined>>;
}

function FormComponent({ setFormData }: FormComponentProps) {
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

  const amount = 300000; // initial amount borrowed
  const rate = 5.25 / 100 / 12; //monthly interest rate
  const term = 25 * 12; //number of payments months

  function monthlyPayment(amount: number, term: number, rate: number) {
    return (
      (amount * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1)
    );
  }

  //monthly mortgage payment
  const repayment = monthlyPayment(amount, term, rate);
  const interestOnly = repayment * term - amount;

  console.log(repayment);
  console.log(interestOnly);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
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
            type="number"
            inputMode="numeric"
            pattern="[0-9]+"
            {...register("amount", { required: true })}
          />
          <AmountSpan>£</AmountSpan>
        </InputBoxAmount>
      </AmountLabelInputBox>

      <TwoInputsFlex>
        <TermLabelInputBox>
          <TermLabel>Mortgage Term</TermLabel>
          <InputBoxTerm>
            <InputTerm
              type="number"
              inputMode="numeric"
              pattern="[0-9]+"
              {...register("term", { required: true })}
            />
            <TermSpan>years</TermSpan>
          </InputBoxTerm>
        </TermLabelInputBox>

        <RateLabelInputBox>
          <RateLabel>Interest Rate</RateLabel>
          <InputBoxRate>
            <InputRate
              type="number"
              inputMode="numeric"
              pattern="[0-9]+"
              {...register("rate", { required: true })}
            />
            <RateSpan>%</RateSpan>
          </InputBoxRate>
        </RateLabelInputBox>
      </TwoInputsFlex>

      <InputsRadioBox>
        <LabelMortgageType>Mortgage Type</LabelMortgageType>
        <RepaymentInputBox>
          <InputRepayment
            type="radio"
            value="repayment"
            {...register("type")}
          />
          <RepaymentText>Repayment</RepaymentText>
        </RepaymentInputBox>
        <InterestInputBox>
          <InputInterest type="radio" value="interest" {...register("type")} />
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
