import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import { Incomes } from "./Incomes";

describe("Given a component Incomes", () => {
  describe("When rendered", () => {
    test("Then it should show 3 inputs where the user can type", () => {
      const userWrite = 5000;

      renderWithFormik(<Incomes />);

      const inputs = screen.getAllByRole("spinbutton");

      inputs.forEach((input) => {
        userEvent.type(input, userWrite.toString());
        expect(input).toHaveValue(userWrite);
      });
    });
  });
});
