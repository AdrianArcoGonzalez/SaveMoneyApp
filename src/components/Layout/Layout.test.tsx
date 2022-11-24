import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's instantiated with a title as children", () => {
    test("Then it should render the children", () => {
      const title = <h1>Test</h1>;

      render(<Layout children={title} />);
      const test = screen.getByText("Test");

      expect(test).toBeInTheDocument();
    });
  });
});
