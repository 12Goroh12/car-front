import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginComponent from "../components/LoginComponent";
import { WebsiteUrls } from "../types/enums";

describe("render the component", () => {
  it("render heading", () => {
    const submit = jest.fn();
    render(
      <LoginComponent
        heading="Registration"
        link="Log in with account social"
        href={WebsiteUrls.SOCIAL}
        exist={false}
        submitHandler={submit}
        error="This Email already exists"
        account="have an account?"
      />
    );

    expect(
      screen.getByRole("heading", { name: /registration/i })
    ).toBeInTheDocument();
  });

  it("field name", () => {
    const submit = jest.fn();
    render(
      <LoginComponent
        heading="Registration"
        link="Log in with account social"
        href={WebsiteUrls.SOCIAL}
        exist={false}
        submitHandler={submit}
        error="This Email already exists"
        account="have an account?"
      />
    );

    const inputName = screen.queryByPlaceholderText(/john/i);

    expect(inputName).toBeInTheDocument();
    expect(inputName).not.toBeRequired();
  });

  it("focus field name", () => {
    const submit = jest.fn();
    render(
      <LoginComponent
        heading="Registration"
        link="Log in with account social"
        href={WebsiteUrls.SOCIAL}
        exist={false}
        submitHandler={submit}
        error="This Email already exists"
        account="have an account?"
      />
    );

    const input = screen.getByPlaceholderText("John");

    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it("test for the onChange event", () => {
    const submit = jest.fn();
    render(
      <LoginComponent
        heading="Registration"
        link="Log in with account social"
        href={WebsiteUrls.SOCIAL}
        exist={false}
        submitHandler={submit}
        error="This Email already exists"
        account="have an account?"
      />
    );

    const input = screen.getByPlaceholderText(/john/i);

    userEvent.type(input, "Admin");

    expect(screen.getByDisplayValue(/admin/i)).toBeInTheDocument();
  });

  it("should show validation on blur", async () => {
    const submit = jest.fn();
    render(
      <LoginComponent
        heading="Registration"
        link="Log in with account social"
        href={WebsiteUrls.SOCIAL}
        exist={false}
        submitHandler={submit}
        error="This Email already exists"
        account="have an account?"
      />
    );

    const input = screen.getByLabelText(/name/i);

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByTestId("nameError")).not.toBe(null);
      expect(screen.getByTestId("nameError")).toHaveTextContent(
        "name is a required field"
      );
    });
  });
});
