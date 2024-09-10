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
  MortgageType,
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
  InputError,
  BtnIcon,
} from "./App.styled";

import { useForm } from "react-hook-form";

function App() {
  const [formData, setFormData] = useState<FormValues | null>(null);

  return (
    <Wrapper>
      <FormComponent setFormData={setFormData} />
      {!formData && <EmptyResultsComponent />}
      {formData && <CalculatedResults formData={formData} />}
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
  setFormData: React.Dispatch<React.SetStateAction<FormValues | null>>;
}

function FormComponent({ setFormData }: FormComponentProps) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
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
    if (!data.type) {
      setError("type", { message: "Select one option" });
    }
    setFormData(data);
  };

  const handleReset = () => {
    reset();
    clearErrors();
    setFormData(null);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeaderBox>
        <Header>Mortgage Calculator</Header>
        <ClearBtn type="button" onClick={handleReset}>
          Clear All
        </ClearBtn>
      </HeaderBox>

      <AmountLabelInputBox>
        <AmountLabel htmlFor="amount">Mortgage Amount</AmountLabel>
        <InputBoxAmount>
          <InputAmount
            id="amount"
            type="number"
            inputMode="numeric"
            pattern="[0-9]+"
            {...register("amount", { required: true })}
            error={Boolean(errors.amount)}
          />
          {errors.amount && <InputError>This field is required</InputError>}
          <AmountSpan error={Boolean(errors.amount)}>£</AmountSpan>
        </InputBoxAmount>
      </AmountLabelInputBox>

      <TwoInputsFlex>
        <TermLabelInputBox>
          <TermLabel htmlFor="term">Mortgage Term</TermLabel>
          <InputBoxTerm>
            <InputTerm
              id="term"
              type="number"
              inputMode="numeric"
              pattern="[0-9]+"
              {...register("term", { required: true })}
              error={Boolean(errors.amount)}
            />
            {errors.term && <InputError>This field is required</InputError>}
            <TermSpan error={Boolean(errors.amount)}>years</TermSpan>
          </InputBoxTerm>
        </TermLabelInputBox>

        <RateLabelInputBox>
          <RateLabel htmlFor="rate">Interest Rate</RateLabel>
          <InputBoxRate>
            <InputRate
              id="rate"
              type="number"
              step="0.01"
              inputMode="numeric"
              pattern="[0-9]+"
              {...register("rate", { required: true })}
              error={Boolean(errors.amount)}
            />
            {errors.rate && <InputError>This field is required</InputError>}
            <RateSpan error={Boolean(errors.amount)}>%</RateSpan>
          </InputBoxRate>
        </RateLabelInputBox>
      </TwoInputsFlex>

      <InputsRadioBox>
        <MortgageType>Mortgage Type</MortgageType>
        <RepaymentInputBox htmlFor="repayment">
          <InputRepayment
            id="repayment"
            type="radio"
            value="repayment"
            {...register("type")}
          />
          <RepaymentText>Repayment</RepaymentText>
        </RepaymentInputBox>
        <InterestInputBox htmlFor="interest">
          <InputInterest
            id="interest"
            type="radio"
            value="interest"
            {...register("type")}
          />
          <InterestText>Interest Only</InterestText>
        </InterestInputBox>{" "}
        {errors.type && <InputError>{errors.type.message}</InputError>}
      </InputsRadioBox>

      <CalculateBtn>
        <BtnIcon src="/icon-calculator.svg" />
        <CalculateBtnText>Calculate Repayments</CalculateBtnText>
      </CalculateBtn>
    </Form>
  );
}

function EmptyResultsComponent() {
  return (
    <EmptyResultsBox>
      <ImgEmptyResults src="/illustration-empty.svg" />
      <HeadingEmptyResults>Results shown here</HeadingEmptyResults>
      <TextEmptyResults>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </TextEmptyResults>
    </EmptyResultsBox>
  );
}

interface CalculatedResultsProps {
  formData: FormValues;
}

function CalculatedResults({ formData }: CalculatedResultsProps) {
  const { amount, term, rate, type } = formData || {};

  const amountNr = parseInt(amount);
  const rateNr = parseFloat(rate) / 100 / 12;
  const termNr = parseInt(term) * 12;

  function calcRepaymentMonthly(a: number, t: number, r: number) {
    return (a * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
  }

  function calcInterestMonthly(p: number, i: number) {
    return p * i;
  }

  let monthly;
  let total;

  if (type === "repayment") {
    monthly = calcRepaymentMonthly(amountNr, termNr, rateNr);
    total = monthly * termNr;
  }

  if (type === "interest") {
    monthly = calcInterestMonthly(amountNr, rateNr);
    total = monthly * termNr;
  }

  return (
    <ResultsSection>
      <HeadingResults>Your results</HeadingResults>
      <ResultsText>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "
        {type === "repayment" ? "calculate repayments " : "calculate interest "}
        " again.
      </ResultsText>
      <CalculatedBox>
        <RepaymentCalcBox>
          <RepaymentCalcText>Your monthly payments</RepaymentCalcText>
          <RepaymentNumber>
            {monthly &&
              new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(monthly)}
          </RepaymentNumber>
        </RepaymentCalcBox>
        <TermCalcBox>
          <TermCalcText>Total you'll repay over the term</TermCalcText>
          <TermNumber>
            {total &&
              new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(total)}
          </TermNumber>
        </TermCalcBox>
      </CalculatedBox>
    </ResultsSection>
  );
}

export default App;
