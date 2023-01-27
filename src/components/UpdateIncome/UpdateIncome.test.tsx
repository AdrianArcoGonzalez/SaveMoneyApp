import { screen, waitFor } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { UpdateIncome } from "./UpdateIncome";
import { mockMovement } from "../../Utils/mockBack";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given a component UpdateIncome", () => {
  describe("When rendered", () => {
    const movement = mockMovement;
    const buttonName = "Update";
    const mockClose = jest.fn();

    test("Then it should show a comoponent withe the heading 'New Income'", () => {
      const headingText = "Update";

      renderWithFormik(<UpdateIncome movement={mockMovement} />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    describe("And the user click on 'Update' without changes", () => {
      test("Then it should call the function close form", async () => {
        renderWithFormik(
          <UpdateIncome movement={movement} closeForm={mockClose} />
        );

        const updateButton = screen.getByRole("button", { name: buttonName });

        await userEvent.click(updateButton);

        await waitFor(() => expect(mockClose).toHaveBeenCalled());
      });
    });

    describe("And the user click on 'Update' with changes", () => {
      test("Then it should call the function close form and succes from toast", async () => {
        renderWithFormik(
          <UpdateIncome movement={movement} closeForm={mockClose} />
        );

        const updateButton = screen.getByRole("button", { name: buttonName });
        const input = screen.getAllByRole("textbox");

        await userEvent.type(input[0], "changes");
        await userEvent.click(updateButton);

        await waitFor(() => expect(mockClose).toHaveBeenCalled());
        await waitFor(() => expect(toast.success).toHaveBeenCalled());
      });
    });
  });
});
