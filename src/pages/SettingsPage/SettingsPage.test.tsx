import { render, screen } from "@testing-library/react";
import SettingsPage from "./SettingsPage";

describe("Given a component SettingsPage", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'Settings'", () => {
      const headingText = "Settings";

      render(<SettingsPage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
