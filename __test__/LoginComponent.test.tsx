import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from ".";
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

  it("should show validation on blur field name", async () => {
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

  it("field email", () => {
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

    const email = screen.getByLabelText(/email/i);

    expect(email).toBeInTheDocument();
    expect(email).not.toBeRequired();
    expect(email).not.toHaveFocus();
    email.focus();
    expect(email).toHaveFocus();

    userEvent.type(email, "test@test.com");

    expect(screen.getByDisplayValue(/test@test.com/i)).toBeInTheDocument();
  });

  it("should show validation on blur field email", async () => {
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

    const email = screen.getByLabelText(/email/i);

    fireEvent.blur(email);

    await waitFor(() => {
      expect(screen.getByTestId("error")).not.toBe(null);
      expect(screen.getByTestId("error")).toHaveTextContent(
        "email is a required field"
      );
    });
  });

  it("should show validation on blur field password", async () => {
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

    const email = screen.getByLabelText(/password/i);

    fireEvent.blur(email);

    await waitFor(() => {
      expect(screen.getByTestId("errorPass")).not.toBe(null);
      expect(screen.getByTestId("errorPass")).toHaveTextContent(
        "password is a required field"
      );
    });
  });

  it("field password", () => {
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

    const password = screen.getByLabelText(/password/i);

    expect(password).toBeInTheDocument();
    expect(password).not.toBeRequired();
    expect(password).not.toHaveFocus();
    password.focus();
    expect(password).toHaveFocus();

    userEvent.type(password, "123456");

    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it("button submit", async () => {
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

    const button = screen.getByRole("button", { name: /submit/i });
    const email = screen.getByLabelText(/password/i);

    fireEvent.blur(email);

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    await waitFor(() => {
      expect(screen.getByTestId("errorPass")).not.toBe(null);
      expect(screen.getByTestId("errorPass")).toHaveTextContent(
        "password is a required field"
      );
      expect(button).toBeDisabled();
    });
  });

  it("Sign in with Social work", async () => {
    const router = createMockRouter({
      query: { pathname: WebsiteUrls.REGISTRATION },
    });
    const submit = jest.fn();
    render(
      <RouterContext.Provider value={router}>
        <LoginComponent
          heading="Registration"
          link="Log in with account social"
          href={WebsiteUrls.SOCIAL}
          exist={false}
          submitHandler={submit}
          error="This Email already exists"
          account="have an account?"
        />
      </RouterContext.Provider>
    );

    const button = screen.getByText(/Log in with account social/i);
    const haveAnAccount = screen.getByText(/have an account?/i);

    expect(haveAnAccount).toBeInTheDocument();
    expect(haveAnAccount).toHaveAttribute("href", WebsiteUrls.LOGIN);
    expect(button).toHaveAttribute("href", WebsiteUrls.SOCIAL);
  });
});
