import { calculateInvestmentResults, formatter } from "../../util/investment";
export default function Result({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  const initalInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  // console.log("Result");
  // console.log(data);

  return (
    <div id="result">
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            const totalInterest =
              obj.valueEndOfYear -
              obj.annualInvestment * obj.year -
              initalInvestment;
            const totalAmountInvested = obj.valueEndOfYear - totalInterest;
            return (
              <tr key={obj.year}>
                <td>{obj.year}</td>
                <td>{formatter.format(obj.valueEndOfYear)}</td>
                <td>{formatter.format(obj.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
