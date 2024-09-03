import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 46rem;
  min-width: 31rem;
`;

export const Form = styled.form`
  width: 100%;
  background-color: #fff;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Header = styled.h2`
  color: #133041;
  font-weight: 700;
  font-size: 2.4rem;
`;

export const ClearBtn = styled.button`
  font-weight: 500;
  line-height: 150%;
  align-self: flex-start;
  border-bottom: 1px solid #4e6e7e;
`;

///////////////// AMOUNT INPUT /////////////////////
export const AmountLabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AmountLabel = styled.label`
  font-weight: 500;
`;

export const InputAmount = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 4.4rem;
  font-size: 1.8rem;
`;

export const InputBoxAmount = styled.div`
  position: relative;
`;

export const AmountSpan = styled.span`
  position: absolute;
  left: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: #e4f4fd;
  height: 95%;
  padding: 0 1.2rem;
  border-bottom-left-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
`;

///////////////// TERM INPUT /////////////////////

export const TermLabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TermLabel = styled.label`
  font-weight: 500;
`;

export const InputTerm = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 1rem;
  font-size: 1.8rem;
`;

export const InputBoxTerm = styled.div`
  position: relative;
`;

export const TermSpan = styled.span`
  position: absolute;
  right: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: #e4f4fd;
  height: 95%;

  padding: 0 1.2rem;
  border-bottom-right-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
`;

///////////////// RATE INPUT /////////////////////

export const RateLabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RateLabel = styled.label`
  font-weight: 500;
`;

export const InputRate = styled.input`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 1rem;
  font-size: 1.8rem;
`;

export const InputBoxRate = styled.div`
  position: relative;
`;

export const RateSpan = styled.span`
  position: absolute;
  right: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: #e4f4fd;
  height: 95%;

  padding: 0 1.2rem;
  border-bottom-right-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
`;

////////////////// TYPE //////////////////////

export const InputsRadioBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const LabelMortgageType = styled.label``;

export const RepaymentInputBox = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid #4e6e7e;
  border-radius: 0.2rem;
  padding: 1rem;

  &:has(input:checked) {
    border: 1px solid #d8db2f;
    background-color: rgba(216, 219, 47, 0.15);
  }
`;

export const InputRepayment = styled.input`
  accent-color: #4e6e7e;
`;

export const RepaymentText = styled.span``;

export const InterestInputBox = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid #4e6e7e;
  border-radius: 0.2rem;
  padding: 1rem;

  &:has(input:checked) {
    border: 1px solid #d8db2f;
    background-color: rgba(216, 219, 47, 0.15);
  }
`;

export const InputInterest = styled.input`
  accent-color: #4e6e7e;
`;

export const InterestText = styled.span``;

////////////////// CALCULATE BTN //////////////////////

export const CalculateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: #d8db2f;
  width: 100%;
  border-radius: 99rem;
  padding: 1.6rem 0;
`;

export const CalculateBtnText = styled.p`
  font-weight: 700;
  color: #133041;
  font-size: 1.8rem;
`;

/////////////////// RESULTS ///////////////////////

//////// EMPTY ////////
export const EmptyResultsBox = styled.div`
  width: 100%;
  background-color: #133041;
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

export const ImgEmptyResults = styled.img`
  height: 19.2rem;
`;

export const HeadingEmptyResults = styled.h2`
  color: #fff;
`;

export const TextEmptyResults = styled.p`
  width: 90%;
  color: #9abed5;
`;

//////////// CALCULATED ////////////

export const ResultsSection = styled.div`
  width: 100%;
  background-color: #133041;
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HeadingResults = styled.h2`
  color: #fff;
`;

export const ResultsText = styled.p`
  color: #9abed5;
  line-height: 150%;
  margin-bottom: 1rem;
`;

export const CalculatedBox = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 2.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.8rem;
  border-top: 4px solid #d8db2f;
`;

export const RepaymentCalcBox = styled.div`
  border-bottom: 1px solid #9abed5;
  padding-bottom: 2rem;
`;

export const RepaymentCalcText = styled.p`
  color: #9abed5;
  margin-bottom: 0.8rem;
`;

export const RepaymentNumber = styled.span`
  color: #d8db2f;
  font-size: 4rem;
  font-weight: 700;
`;

export const TermCalcBox = styled.div``;

export const TermCalcText = styled.p`
  color: #9abed5;
  margin-bottom: 0.8rem;
`;

export const TermNumber = styled.span`
  color: #fff;
  font-size: 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
`;
