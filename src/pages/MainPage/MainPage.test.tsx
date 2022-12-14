import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../Utils/Wrapper";
import MainPage from "./MainPage";

describe("Given a MainPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      const titleText = "Dashboard";

      render(<MainPage />, { wrapper: Wrapper });
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });
    test("And it should show a 2 cards", () => {
      const cardOne = "Money saved";
      const cardTwo = "Limit for this month";

      render(<MainPage />, { wrapper: Wrapper });
      const firstCard = screen.getByText(cardOne);
      const secondCard = screen.getByText(cardTwo);

      expect(firstCard).toBeInTheDocument();
      expect(secondCard).toBeInTheDocument();
    });
  });
});
