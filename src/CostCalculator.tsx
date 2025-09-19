import React, { useState } from "react";

type CostCalculatorProps = {
  priceOfSingleVMPerHour: number;
};

function CostCalculator({ priceOfSingleVMPerHour }: CostCalculatorProps) {
  const [vmNumber, setVmNumber] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    setVmNumber(Number.isNaN(parsed) ? 0 : parsed);
  };

  const costPerHour = vmNumber * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerDay * 365;

  return (
    <div>
      <h1>VM Cost Calculator</h1>

      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={handleChange}
      />

      <p>Cost per hour: {costPerHour}</p>
      <p>Cost per day: {costPerDay}</p>
      <p>Cost per month: {costPerMonth}</p>
      <p>Cost per year: {costPerYear}</p>
    </div>
  );
}

export default CostCalculator;
