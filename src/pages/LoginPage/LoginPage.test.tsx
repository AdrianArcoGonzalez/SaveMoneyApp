import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import LoginPage from "./LoginPage";

describe("Given a Login Page component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a form and a button", () => {
      const text = "Save your time and your money";
      const text2 = "Welcome!";

      renderWithFormik(<LoginPage />);

      const firstHeading = screen.getByRole("heading", { name: text });
      const secondaryHeading = screen.getByRole("heading", { name: text2 });

      expect(firstHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
    });
  });
});
