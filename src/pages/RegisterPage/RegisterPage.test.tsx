import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import RegisterPage from "./RegisterPage";

describe("Given a component Registerpage", () => {
  describe("When rendered", () => {
    test("Then it should show a Register component with a header 'Create your account", () => {
      const title = "Create your account";

      renderWithFormik(<RegisterPage />);

      const header = screen.getByRole("heading", { name: title });

      expect(header).toBeInTheDocument();
    });
  });
});
