import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CostCalculator from "./CostCalculator";

test("Test if the CostCalculator is rendered", () => {
  render(<CostCalculator priceOfSingleVMPerHour={0.5} />);
  const costCalculatorText = screen.getByText(/VM Cost Calculator/i);
  expect(costCalculatorText).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 1 VM and 0.5 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={0.5} />);

  
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    fireEvent.change(inputField, { target: { value: "1" } });
  });

  
  const costPerHour = screen.getByText(/Cost per hour: 0.5/i);
  expect(costPerHour).toBeInTheDocument();

  
  const costPerDay = screen.getByText(/Cost per day: 12/i);
  expect(costPerDay).toBeInTheDocument();

  
  const costPerMonth = screen.getByText(/Cost per month: 360/i);
  expect(costPerMonth).toBeInTheDocument();

  
  const costPerYear = screen.getByText(/Cost per year: 4380/i);
  expect(costPerYear).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 2 VMs and 7.2 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={7.2} />);

  
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    fireEvent.change(inputField, { target: { value: "2" } });
  });

  
  const costPerHour = screen.getByText(/Cost per hour: 14.4/i);
  expect(costPerHour).toBeInTheDocument();

  
  const costPerDay = screen.getByText(/Cost per day: 345.6/i);
  expect(costPerDay).toBeInTheDocument();

  
  const costPerMonth = screen.getByText(/Cost per month: 10368/i);
  expect(costPerMonth).toBeInTheDocument();

  
  const costPerYear = screen.getByText(/Cost per year: 126144/i);
  expect(costPerYear).toBeInTheDocument();
});

test("Test if the CostCalculator renders the correct costs with 9 VMs and 3.3 cost per hour", () => {
  render(<CostCalculator priceOfSingleVMPerHour={45} />);

  // enter input value of 9
  const inputField = screen.getByLabelText(/Number of VMs/i);
  act(() => {
    fireEvent.change(inputField, { target: { value: "9" } });
  });

  
  const costPerHour = screen.getByText(/Cost per hour: 405/i);
  expect(costPerHour).toBeInTheDocument();

  const costPerDay = screen.getByText(/Cost per day: 9720/i);
  expect(costPerDay).toBeInTheDocument();

  const costPerMonth = screen.getByText(/Cost per month: 291600/i);
  expect(costPerMonth).toBeInTheDocument();

  const costPerYear = screen.getByText(/Cost per year: 3547800/i);
  expect(costPerYear).toBeInTheDocument();
});
