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
  height: 93%;
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
  height: 93%;
  padding: 0 1.2rem;
  border-bottom-left-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
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
  height: 93%;
  padding: 0 1.2rem;
  border-bottom-left-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
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
  padding: 1rem 0;
`;

export const CalculateBtnText = styled.p`
  font-weight: 700;
  color: #133041;
  font-size: 1.8rem;
`;

/////////////////// RESULTS ///////////////////////
export const Results = styled.div`
  width: 100%;
  background-color: #133041;
`;
