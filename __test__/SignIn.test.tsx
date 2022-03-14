import userEvent from "@testing-library/user-event";
import SignIn from "../components/auth/SignIn";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";
import { WebsiteUrls } from "../types/enums";

describe("render sign in navbar", () => {
  it("should render logo", () => {
    render(<SignIn showNavbar={false} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should alternative text  logo", () => {
    render(<SignIn showNavbar={false} />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("should be text", () => {
    render(<SignIn showNavbar={false} />);

    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("should push the link", () => {
    render(<SignIn showNavbar={false} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", WebsiteUrls.HOME);
  });

  it("button should work", () => {
    const router = createMockRouter({ pathname: WebsiteUrls.REGISTRATION });
    render(
      <RouterContext.Provider value={router}>
        <SignIn showNavbar={false} />
      </RouterContext.Provider>
    );

    userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(router.push).toHaveBeenCalledWith(WebsiteUrls.REGISTRATION);
  });
});
