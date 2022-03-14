import { fireEvent, render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter, provider } from ".";
import LoginButton from "../components/LoginButton";
import { WebsiteUrls } from "../types/enums";

const session = {
  user: {},
  expires: "",
};

describe("render login button", () => {
  it("route button", () => {
    const router = createMockRouter({ pathname: WebsiteUrls.HOME });
    render(
      <RouterContext.Provider value={router}>
        <SessionProvider session={session}>
          <LoginButton provider={provider} color="red" />
        </SessionProvider>
      </RouterContext.Provider>
    );

    fireEvent.click(
      screen.getByRole("button", { name: `Sign in with ${provider.name}` })
    );

    expect(router.push).toHaveBeenCalledWith(WebsiteUrls.HOME);
  });
});
