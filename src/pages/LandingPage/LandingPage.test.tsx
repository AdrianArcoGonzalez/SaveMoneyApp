import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a landing page", () => {
  describe("When it's instantiated", () => {
    test("Then it should show button that navigate to login", async () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
