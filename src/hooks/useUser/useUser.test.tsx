import { renderHook } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { UserLogin } from "../../interfaces/interfaces";
import UserContextProvider from "../../store/UserContext/UserContextProvider";

import useUser from "./useUser";
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const WrapperWithContext = ({ children }: WrapperProps): JSX.Element => {
  return (
    <UserContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </UserContextProvider>
  );
};

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given a useUser custom hook", () => {
  describe("When it's invoked with the login method", () => {
    test("Then it should call the toast error when it return an error", async () => {
      const wrongData: UserLogin = { userName: "wrongName", password: "" };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: WrapperWithContext });

      await loginUser(wrongData);

      expect(toast.error).toHaveBeenCalled();
    });

    test("And when it return the correct data if should call the set method from localStorage and the success toast", async () => {
      jest.spyOn(Storage.prototype, "setItem");
      Storage.prototype.setItem = jest.fn();
      const correctData: UserLogin = { userName: "admin", password: "admin" };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: WrapperWithContext });

      await loginUser(correctData);

      expect(localStorage.setItem).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalled();
    });
  });
});
