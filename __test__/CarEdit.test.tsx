import userEvent from "@testing-library/user-event";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import CarEdit from "../components/CarEdit";
import axios from "axios";
import { ICar } from "../types/cars";
import { BaseUrl } from "../types/enums";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const car: ICar = {
  name: "",
  price: 20000,
  description: "nice car",
  speed: 2.3,
  reserve: 345,
  used: false,
  file: ["123"],
  _id: "123",
};

describe("render the car edit component", () => {
  const edit = jest.fn();

  beforeEach(() => {
    render(<CarEdit carId="123" setEditForm={edit} />);
    edit();
  });

  it("there should be an heading in the component", () => {
    const heading = screen.getByRole("heading", {
      name: /something went wrong/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("render all field", async () => {
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

  it("test for the onChange event", () => {
    const name = screen.getByLabelText(/name/i);

    userEvent.type(name, "tesla");

    expect(screen.getByDisplayValue(/tesla/i)).toBeInTheDocument();
  });

  it("should get the data for the car", async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: car })
    );

    expect(mockedAxios.get).toHaveBeenCalledTimes(4);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BaseUrl.URL}cars/details/${car._id}`
    );
  });

  it("must be an error", async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    const message = await screen.findByText(/to change the data/i);
    expect(message).toBeInTheDocument();
  });
});
