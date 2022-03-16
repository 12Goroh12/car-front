import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import CarDetail from "../components/CarDetail";
import { ICar } from "../types/cars";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";
import axios from "axios";
import { BaseUrl } from "../types/enums";

const carDetail: ICar = {
  name: "Tesla",
  price: 20000,
  description: "nice car",
  speed: 2.3,
  reserve: 345,
  used: false,
  file: ["123"],
  _id: "123",
};

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("render the detail component", () => {
  const router = createMockRouter({ pathname: "/" });
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <CarDetail carId="123" />
      </RouterContext.Provider>
    );
  });

  it("should get the data for the car", () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: carDetail })
    );

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BaseUrl.URL}cars/details/123`
    );
  });

  it("render title in detail the component", () => {
    const heading = screen.getByRole("heading", {
      name: `${carDetail.name}`,
    });

    expect(heading).toBeInTheDocument();
  });

  it("render image", () => {
    const [speed, power] = screen.getAllByRole("img");

    expect(speed).toBeInTheDocument();
    expect(power).toBeInTheDocument();
  });

  it("render for buttons ", async () => {
    const test = screen.getByRole("button", { name: /test drive/i });
    const back = screen.getByRole("button", { name: /back/i });
    const remove = screen.queryByRole("button", { name: /delete car/i });
    const edit = screen.queryByRole("button", { name: /edit/i });

    userEvent.click(back);
    expect(router.back).toHaveBeenCalledTimes(1);

    expect(remove).toBeNull();
    expect(edit).toBeNull();
    expect(back).not.toBeDisabled();
    expect(back).toBeInTheDocument();

    expect(test).not.toBeDisabled();
    expect(test).toBeInTheDocument();
  });
});
