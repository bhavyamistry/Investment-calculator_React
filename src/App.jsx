import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import InputGroup from "./components/UserInput/InputGroup";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [annualData, setAnnualData] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputValid = userInput["duration"] > 0;
  function updateUserInput(key, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} updateData={updateUserInput} />
      {!inputValid && (
        <p className="center">Duration should be greater than zero!</p>
      )}
      {inputValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
