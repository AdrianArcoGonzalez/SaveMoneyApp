import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import NoCredentialsRoutes from "./NoCredentialsRoutes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => mockNavigate,
}));

describe("Given a NoCredentialsRoutes", () => {
  const text = "Test";
  describe("When it's instantiated with isLogged false", () => {
    test("Then it should show the children", () => {
      const userLoged = false;

      render(
        <BrowserRouter>
          <NoCredentialsRoutes isLogged={userLoged}>
            <h1>{text}</h1>
          </NoCredentialsRoutes>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });

    describe("And when it's instantiated with isLogged true", () => {
      test("Then it should not show the children", async () => {
        const userLoged = true;

        render(
          <BrowserRouter>
            <NoCredentialsRoutes isLogged={userLoged}>
              <h1>{text}</h1>
            </NoCredentialsRoutes>
          </BrowserRouter>
        );

        const title = screen.queryByText(text);

        await act(() => {
          expect(title).toBeNull();
        });
      });
    });
  });
});
