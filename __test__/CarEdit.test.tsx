import userEvent from "@testing-library/user-event";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import CarEdit from "../components/CarEdit";

describe("render the car edit component", () => {
  it("there should be an heading in the component", () => {
    const edit = jest.fn();
    render(<CarEdit carId="123" setEditForm={edit} />);

    const heading = screen.getByRole("heading", {
      name: /to change the data/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("render all field", async () => {
    const edit = jest.fn();
    render(<CarEdit carId="123" setEditForm={edit} />);

    const name = screen.getByLabelText(/name/i);
    const price = screen.getByLabelText(/price/i);
    const speed = screen.getByLabelText(/speed/i);
    const reserve = screen.getByLabelText(/reserve/i);
    const description = screen.getByText(/description/i);
    const checkbox = screen.getByLabelText(/used/i);
    const button = screen.getByRole("button", { name: /save/i });

    fireEvent.blur(price);

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    await waitFor(() => {
      expect(screen.getByTestId("priceError")).not.toBe(null);
      expect(screen.getByTestId("priceError")).toHaveTextContent(
        "price is a required field"
      );
      expect(button).toBeDisabled();
    });

    userEvent.tab();
    expect(name).toHaveFocus();
    userEvent.tab();
    expect(price).toHaveFocus();
    userEvent.tab();
    expect(speed).toHaveFocus();
    userEvent.tab();
    expect(reserve).toHaveFocus();
    userEvent.tab();

    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    await waitFor(() => {
      const mileage = screen.getByLabelText(/mileage/i);
      expect(checkbox).toBeChecked();
      expect(mileage).toBeInTheDocument();
      expect(mileage).not.toHaveFocus();
      mileage.focus();
      expect(mileage).toHaveFocus();
    });

    fireEvent.blur(name);
    fireEvent.blur(price);
    fireEvent.blur(speed);
    fireEvent.blur(reserve);

    await waitFor(() => {
      expect(screen.getByTestId("nameError")).not.toBe(null);
      expect(screen.getByTestId("nameError")).toHaveTextContent(
        "name is a required field"
      );
      expect(screen.getByTestId("priceError")).not.toBe(null);
      expect(screen.getByTestId("priceError")).toHaveTextContent(
        "price is a required field"
      );
      expect(screen.getByTestId("speedError")).not.toBe(null);
      expect(screen.getByTestId("speedError")).toHaveTextContent(
        "speed is a required field"
      );
      expect(screen.getByTestId("reserveError")).not.toBe(null);
      expect(screen.getByTestId("reserveError")).toHaveTextContent(
        "reserve is a required field"
      );
      expect(screen.getByTestId("descriptionError")).not.toBe(null);
      expect(screen.getByTestId("descriptionError")).toHaveTextContent(
        "description is a required field"
      );
    });

    expect(name).toBeInTheDocument();
    expect(name).not.toBeRequired();
    expect(price).toBeInTheDocument();
    expect(price).not.toBeRequired();
    expect(speed).toBeInTheDocument();
    expect(speed).not.toBeRequired();
    expect(reserve).toBeInTheDocument();
    expect(reserve).not.toBeRequired();
    expect(description).toBeInTheDocument();
    expect(description).not.toBeRequired();
  });
});
