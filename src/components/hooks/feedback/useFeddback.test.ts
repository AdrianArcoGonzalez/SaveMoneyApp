import { renderHook } from "@testing-library/react";
import { useFeeback } from "./useFeedback";

describe("Given a function useFeedback", () => {
  describe("When invoked", () => {
    test("the it should return a function errorFeedback", () => {
      const {
        result: { current: errorFeedback },
      } = renderHook(useFeeback);

      expect(errorFeedback).not.toBeNull();
    });

    test("the it should return a function succesFeedback", () => {
      const {
        result: { current: succesFeedback },
      } = renderHook(useFeeback);

      expect(succesFeedback).not.toBeNull();
    });

    test("the it should return a function infoFeedback", () => {
      const {
        result: { current: infoFeedback },
      } = renderHook(useFeeback);

      expect(infoFeedback).not.toBeNull();
    });
  });
});
