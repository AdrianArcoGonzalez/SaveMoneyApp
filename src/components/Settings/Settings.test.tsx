import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import Settings from "./Settings";

describe("Given a component Settings", () => {
  describe("When rendered", () => {
    test("Then it should show a component with name 'Account'", () => {
      const headingText = "Account";

      renderWithFormik(<Settings />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
