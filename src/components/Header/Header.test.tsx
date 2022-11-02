import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading and an image", async () => {
      render(<Header />);
      const image = screen.getByRole("img");
      const title = screen.getByRole("heading");

      expect(image).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  });
});
