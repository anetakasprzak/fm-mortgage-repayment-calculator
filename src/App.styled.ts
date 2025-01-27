import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  min-width: 31rem;

  @media screen and (min-width: 39em) {
    max-width: 70rem;
  }

  @media screen and (min-width: 44.06em) {
    padding: 2rem 0;
  }

  @media screen and (min-width: 80em) {
    flex-direction: row;
    max-width: 100rem;
    height: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  background-color: #fff;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  @media screen and (min-width: 39em) {
    padding: 2.6rem 3.2rem;
  }

  @media screen and (min-width: 44.06em) {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  @media screen and (min-width: 80em) {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    padding: 3.2rem 3.6rem;
    gap: 2.4rem;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media screen and (min-width: 39em) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 44.06em) {
    margin-bottom: 1rem;
  }
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
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }

  @media screen and (min-width: 44.06em) {
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
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

export const InputAmount = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 4.4rem;
  font-size: 1.8rem;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;

  border: ${(props) => (props.error ? "1.4px solid red" : "1.4px solid grey")};

  &:focus {
    border: 1.4px solid #000;
  }

  @media screen and (min-width: 39em) {
    padding-left: 5.2rem;
  }
`;

export const InputBoxAmount = styled.div`
  position: relative;
`;

export const AmountSpan = styled.span<{ error: boolean }>`
  position: absolute;
  left: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: ${(props) => (props.error ? "#d73328" : "#e4f4fd")};
  color: ${(props) => (props.error ? "#fff" : "#4e6e7e")};

  height: 3.7rem;

  padding: 0 1.2rem;
  border-bottom-left-radius: 0.1rem;
  border-top-left-radius: 0.1rem;

  @media screen and (min-width: 39em) {
    padding: 0 1.6rem;
  }
`;

///////////////// TERM INPUT /////////////////////

export const TermLabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 39em) {
    flex: 50%;
  }
`;

export const TermLabel = styled.label`
  font-weight: 500;
`;

export const InputTerm = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 1rem;
  font-size: 1.8rem;
  cursor: pointer;

  outline: none;
  border-radius: 0.2rem;
  border: ${(props) => (props.error ? "1.4px solid red" : "1.4px solid grey")};
  &:focus {
    border: 1.4px solid #000;
  }
`;

export const InputBoxTerm = styled.div`
  position: relative;
`;

export const TermSpan = styled.span<{ error: boolean }>`
  position: absolute;
  right: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: ${(props) => (props.error ? "#d73328" : "#e4f4fd")};
  color: ${(props) => (props.error ? "#fff" : "#4e6e7e")};

  height: 3.7rem;

  padding: 0 1.2rem;
  border-bottom-right-radius: 0.1rem;
  border-top-right-radius: 0.1rem;

  @media screen and (min-width: 39em) {
    padding: 0 1.4rem;
  }
`;

///////////////// RATE INPUT /////////////////////

export const RateLabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 39em) {
    flex: 50%;
  }
`;

export const RateLabel = styled.label`
  font-weight: 500;
`;

export const InputRate = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 1rem;
  font-size: 1.8rem;
  cursor: pointer;

  outline: none;
  border-radius: 0.2rem;
  border: ${(props) => (props.error ? "1.4px solid red" : "1.4px solid grey")};

  &:focus {
    border: 1.4px solid #000;
  }
`;

export const InputBoxRate = styled.div`
  position: relative;
`;

export const RateSpan = styled.span<{ error: boolean }>`
  position: absolute;
  right: 1px;
  top: 1px;
  display: flex;
  align-items: center;

  background-color: ${(props) => (props.error ? "#d73328" : "#e4f4fd")};
  color: ${(props) => (props.error ? "#fff" : "#4e6e7e")};

  height: 3.7rem;

  padding: 0 1.2rem;
  border-bottom-right-radius: 0.1rem;
  border-top-right-radius: 0.1rem;

  @media screen and (min-width: 39em) {
    padding: 0 1.6rem;
  }
`;

export const TwoInputsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  @media screen and (min-width: 39em) {
    flex-direction: row;
    gap: 2rem;
  }
`;

////////////////// TYPE //////////////////////

export const InputsRadioBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (min-width: 80em) {
    gap: 2rem;
  }
`;

export const MortgageType = styled.p``;

export const RepaymentInputBox = styled.label`
  display: flex;
  gap: 1rem;
  border: 1px solid #4e6e7e;
  border-radius: 0.2rem;
  padding: 1rem;
  cursor: pointer;

  &:has(input:checked) {
    border: 1px solid #d8db2f;
    background-color: rgba(216, 219, 47, 0.15);
  }
`;

export const InputRepayment = styled.input`
  accent-color: #4e6e7e;
  cursor: pointer;
`;

export const RepaymentText = styled.span``;

export const InterestInputBox = styled.label`
  display: flex;
  gap: 1rem;
  border: 1px solid #4e6e7e;
  border-radius: 0.2rem;
  padding: 1rem;
  cursor: pointer;

  &:has(input:checked) {
    border: 1px solid #d8db2f;
    background-color: rgba(216, 219, 47, 0.15);
  }
`;

export const InputInterest = styled.input`
  accent-color: #4e6e7e;
  cursor: pointer;
`;

export const InterestText = styled.span``;

////////////// INPUT ERROR //////////////////

export const InputError = styled.span`
  color: #d73328;
  font-size: 1.4rem;
`;

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
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }

  @media screen and (min-width: 44.06em) {
    cursor: pointer;

    &:hover {
      transform: scale(1.04);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      opacity: 0.85;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media screen and (min-width: 80em) {
    align-self: flex-start;
    width: 75%;
  }
`;

export const BtnIcon = styled.img``;

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

  @media screen and (min-width: 39em) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 44.06em) {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media screen and (min-width: 80em) {
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 3.2rem 3.2rem;
    justify-content: center;
  }
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

  @media screen and (min-width: 39em) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 44.06em) {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media screen and (min-width: 80em) {
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 3.2rem 3.6rem;
    justify-content: flex-start;
  }
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

  @media screen and (min-width: 39em) {
    padding: 2.4rem;
  }

  @media screen and (min-width: 80em) {
    padding: 2.8rem 3rem;
    gap: 2.4rem;
  }
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

  @media screen and (min-width: 80em) {
    font-size: 5.6rem;
  }
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
