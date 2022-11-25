import { renderHook } from "@testing-library/react";
import { useFeedback } from "./useFeedback";

describe("Given a function useFeedback", () => {
  describe("When invoked", () => {
    test("the it should return a function errorFeedback", () => {
      const {
        result: { current: errorFeedback },
      } = renderHook(useFeedback);

      expect(errorFeedback).not.toBeNull();
    });

    test("the it should return a function succesFeedback", () => {
      const {
        result: { current: succesFeedback },
      } = renderHook(useFeedback);

      expect(succesFeedback).not.toBeNull();
    });

    test("the it should return a function infoFeedback", () => {
      const {
        result: { current: infoFeedback },
      } = renderHook(useFeedback);

      expect(infoFeedback).not.toBeNull();
    });
  });
});
