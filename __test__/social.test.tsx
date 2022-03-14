import { act, render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { providers } from ".";
import Social from "../pages/social";

describe("render social page", () => {
  it("heading social", () => {
    render(
      <SessionProvider>
        <Social providers={providers} />
      </SessionProvider>
    );

    const heading = screen.getByRole("heading", {
      name: "Log in to your account",
    });

    expect(heading).toBeInTheDocument();
  });
});
