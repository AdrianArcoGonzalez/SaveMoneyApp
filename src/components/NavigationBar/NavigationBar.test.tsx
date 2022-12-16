import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import NavigationBar from "./NavigationBar";

describe("Given a component NavigationBar", () => {
  describe("When rendered", () => {
    test("Then it should show 4 buttons", () => {
      const totalButtons = 4;
      renderWithFormik(<NavigationBar />);

      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(totalButtons);
    });
  });
});
