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
`;

export const ClearBtn = styled.button`
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
`;

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
