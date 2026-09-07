import Inputbox from "./InputBox";
import InputGroup from "./InputGroup";
import { useState } from "react";
export default function UserInput({ updateData, userInput }) {
  // updateData(userInput);

  return (
    <div id="user-input">
      <InputGroup>
        <Inputbox
          label="Initial Investmet"
          inputAttr={{
            name: "initalInvestment",
            type: "number",
            onChange: (event) => {
              updateData("initialInvestment", event.target.value);
            },
            value: userInput["initialInvestment"],
          }}
        ></Inputbox>
        <Inputbox
          label="Annual Investmet"
          inputAttr={{
            name: "annualInvestment",
            type: "number",
            onChange: (event) => {
              updateData("annualInvestment", event.target.value);
            },
            value: userInput["annualInvestment"],
          }}
        ></Inputbox>
      </InputGroup>
      <InputGroup>
        <Inputbox
          label="Expected Return"
          inputAttr={{
            name: "expectedReturn",
            type: "number",
            onChange: (event) => {
              updateData("expectedReturn", event.target.value);
            },
            value: userInput["expectedReturn"],
          }}
        ></Inputbox>
        <Inputbox
          label="Duration"
          inputAttr={{
            name: "duration",
            type: "number",
            onChange: (event) => {
              updateData("duration", event.target.value);
            },
            value: userInput["duration"],
          }}
        ></Inputbox>
      </InputGroup>
    </div>
  );
}
