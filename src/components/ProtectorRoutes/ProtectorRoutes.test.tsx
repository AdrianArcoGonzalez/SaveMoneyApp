import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProtectorRoutes from "./ProtectorRoutes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => mockNavigate,
}));

describe("Given a ProtectorRoutes component", () => {
  describe("When it's instantiated with a user login", () => {
    test("Then it should show the children", () => {
      const userLogin = true;

      render(
        <ProtectorRoutes isLogged={userLogin}>
          <h1>Test</h1>
        </ProtectorRoutes>
      );
      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });

    describe("And when it's instantiated with a user not login", () => {
      test("Then it should not show the title", async () => {
        const userLogin = false;

        render(
          <BrowserRouter>
            <ProtectorRoutes isLogged={userLogin}>
              <h1>Test</h1>
            </ProtectorRoutes>
          </BrowserRouter>
        );
        const title = screen.queryByText("Test");
        await act(() => {
          expect(title).toBeNull();
        });
      });
    });
  });
});
