import { fireEvent, render, screen } from "@testing-library/react";
import Content from "../components/Content";
import { createMockRouter } from ".";
import { WebsiteUrls } from "../types/enums";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("redner the content", () => {
  beforeEach(() => {
    render(
      <Content
        image="/tesla-page-1.jpg"
        title="Tesla"
        description="Order Online for Touchless Delivery"
      />
    );
  });

  it("there should be an heading in the component", () => {
    const heading = screen.getByRole("heading", { name: "Tesla" });

    expect(heading).toBeInTheDocument();
  });

  it("there should be an description in the component", () => {
    const description = screen.getByText(
      /Order Online for Touchless Delivery/i
    );

    expect(description).toBeInTheDocument();
  });
});

describe("render content for router", () => {
  it("there should be an button in the component", async () => {
    const router = createMockRouter({ pathname: WebsiteUrls.LOGIN });
    render(
      <RouterContext.Provider value={router}>
        <Content
          image="/tesla-page-1.jpg"
          title="Tesla"
          description="Order Online for Touchless Delivery"
        />
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.queryByRole("button", { name: /store/i })).toBeNull();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
