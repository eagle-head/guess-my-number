import "react-native";
import React from "react";
import { cleanup, render, screen } from "test-utils";
import { NumberContainer } from "../NumberContainer";

jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  return {
    get: () => ({
      width: 375,
      height: 667,
    }),
    addEventListener: jest.fn(),
  };
});

describe("NumberContainer", () => {
  afterEach(cleanup);

  it("should renders conrrectly under normal dimensions", () => {
    render(<NumberContainer>Some Children</NumberContainer>);

    // get a simple text passed as children
    const SomeText = screen.getByRole("text", { name: /some children/i });
    expect(SomeText).toBeTruthy();
  });
});
