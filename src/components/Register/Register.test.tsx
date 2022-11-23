import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import Register from "./Register";

describe("Given a Register components", () => {
  describe("When it's instantiated", () => {
    test("Then it should show five inputs what update the own status when the user type", async () => {
      const userWrite = "Something";

      renderWithFormik(<Register />);

      const inputs = await screen.findAllByRole("textbox");

      await act(async () => {
        inputs.forEach(async (input) => {
          await userEvent.type(input, userWrite);
          expect(input).toHaveValue(userWrite);
        });
      });
    });
  });
});
