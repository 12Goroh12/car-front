import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal";

describe("render the modal component", () => {
  const setModal = jest.fn();

  beforeEach(() => {
    render(<Modal setModal={setModal} />);
    setModal();
  });

  it("render field name", async () => {
    const name = screen.getByPlaceholderText("Enter yuor name");

    userEvent.tab();
    fireEvent.blur(name);

    await waitFor(() => {
      expect(screen.getByTestId("nameError")).not.toBe(null);
      expect(screen.getByTestId("nameError")).toHaveTextContent(
        "name is a required field"
      );
    });

    userEvent.type(name, "Alex");

    expect(screen.getByDisplayValue("Alex")).toBeInTheDocument();
    expect(name).toHaveFocus();
    expect(name).toBeInTheDocument();
    expect(name).not.toBeRequired();
  });

  it("render field email", async () => {
    const email = screen.getByPlaceholderText(/john@acme.com/i);

    userEvent.tab();
    fireEvent.blur(email);

    await waitFor(() => {
      expect(screen.getByTestId("emailError")).not.toBe(null);
      expect(screen.getByTestId("emailError")).toHaveTextContent(
        "email is a required field"
      );
    });

    userEvent.type(email, "www@www.com");

    expect(screen.getByDisplayValue("www@www.com")).toBeInTheDocument();
    expect(email).toHaveFocus();
    expect(email).toBeInTheDocument();
    expect(email).not.toBeRequired();
  });

  it("render field phone", async () => {
    const phone = screen.getByPlaceholderText(/375 29 000-00-00/i);

    userEvent.tab();
    fireEvent.blur(phone);

    await waitFor(() => {
      expect(screen.getByTestId("phoneError")).not.toBe(null);
      expect(screen.getByTestId("phoneError")).toHaveTextContent(
        "phone must be greater than or equal to 12"
      );
    });

    userEvent.type(phone, "375290000000");

    expect(screen.getByDisplayValue("375290000000")).toBeInTheDocument();
    expect(phone).toHaveFocus();
    expect(phone).toBeInTheDocument();
    expect(phone).not.toBeRequired();
  });

  it("test drive button works", async () => {
    const button = screen.getByRole("button", { name: /test drive/i });
    const email = screen.getByPlaceholderText(/john@acme.com/i);

    expect(button).not.toBeDisabled();
    fireEvent.blur(email);

    await waitFor(() => {
      expect(screen.getByTestId("emailError")).not.toBe(null);
      expect(screen.getByTestId("emailError")).toHaveTextContent(
        "email is a required field"
      );
      expect(button).toBeDisabled();
    });

    expect(button).toBeInTheDocument()
  });
});
