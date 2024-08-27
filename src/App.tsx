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
  return <Form>form</Form>;
}

function ResultsComponent() {
  return <Results>results</Results>;
}

export default App;
