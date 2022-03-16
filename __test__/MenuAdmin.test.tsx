import userEvent from "@testing-library/user-event";
import MenuAdmin from "../components/admin/MenuAdmin";
import MenuItem from "../components/admin/MenuItem";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";
import { WebsiteUrls } from "../types/enums";

describe("render menu admin", () => {
  it("there is text in the component", () => {
    render(<MenuAdmin email="admin@admin.com" name="A" />);

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("admin@admin.com")).toBeInTheDocument();
  });

  it("there is list in the component", () => {
    render(<MenuItem />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});

describe("render menu item component", () => {
  const router = createMockRouter({ pathname: WebsiteUrls.NEW_AND_USED });

  beforeEach(() => {
    render(
      <RouterContext.Provider value={router}>
        <MenuItem />
      </RouterContext.Provider>
    );
  });

  it("link in all cars page", () => {
    userEvent.click(screen.getByText("List cars"));

    expect(router.push).toHaveBeenCalledWith(WebsiteUrls.NEW_AND_USED);
  });

  it("link in create car page", () => {
    userEvent.click(screen.getByText("Create car"));

    expect(router.push).toHaveBeenCalledWith(WebsiteUrls.CREATE_CAR);
  });
});
