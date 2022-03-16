import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ICar } from "../types/cars";
import CarList from "../components/CarList";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";

const car: ICar = {
  name: "Tesla 3",
  price: 20000,
  description: "nice car",
  speed: 2.3,
  reserve: 345,
  used: false,
  file: ["123"],
  _id: "123",
};

describe("render the car list component", () => {
  const router = createMockRouter({ pathname: "/" });
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <CarList car={car} />
      </RouterContext.Provider>
    );
  });
  it("render heading and text", () => {
    const heading = screen.getByRole("heading", { name: car.name });

    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/price:/i)).toBeInTheDocument();
    expect(screen.getByText(/power reserve/i)).toBeInTheDocument();
    expect(screen.getByText("0-100 кm/h")).toBeInTheDocument();
  });

  it("render image the component", () => {
    const image = screen.getByAltText(car.name);
    const [speed, power] = screen.getAllByRole("img");

    expect(speed).toBeInTheDocument();
    expect(power).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
  it("link for a button details", () => {
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `${router.pathname}${car._id}`);
  });
});
