import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
describe("Given a Button component", () => {
  describe("When it's instantiated with an action on click", () => {
    test("Then it should call the action when the user click", async () => {
      const text = "testing";
      const mockAction = jest.fn();
      const type = "button";

      render(<Button text={text} onClick={mockAction} type={type} />);
      const button = screen.getByText(text);
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
