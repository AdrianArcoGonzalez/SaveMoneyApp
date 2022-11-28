import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import NavigationBar from "./NavigationBar";

describe("Given a component NavigationBar", () => {
  describe("When rendered", () => {
    test("Then it should show 4 link", () => {
      const totalLinks = 4;
      renderWithFormik(<NavigationBar />);

      const links = screen.getAllByRole("link");

      expect(links.length).toBe(totalLinks);
    });
  });
});
