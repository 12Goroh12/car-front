import userEvent from "@testing-library/user-event";
import SignIn from "../components/auth/SignIn";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";
import { WebsiteUrls } from "../types/enums";

describe("render sign in navbar", () => {
  const router = createMockRouter({ pathname: WebsiteUrls.REGISTRATION });
  
  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <SignIn showNavbar={false} />
      </RouterContext.Provider>
    );
  });

  it("should render logo", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should alternative text  logo", () => {
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("should be text", () => {
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("should push the link", () => {
    expect(screen.getByRole("link")).toHaveAttribute("href", WebsiteUrls.HOME);
  });

  it("button should work", () => {
    userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(router.push).toHaveBeenCalledWith(WebsiteUrls.REGISTRATION);
  });
});
