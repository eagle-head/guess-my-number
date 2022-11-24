import "react-native";
import React from "react";
import { cleanup, render, screen } from "test-utils";
import { PrimaryButton } from "../PrimaryButton";

describe("PrimaryButton", () => {
  afterEach(cleanup);

  test("should renders correctly", () => {
    render(
      <PrimaryButton onPress={jest.fn()} press>
        Some Text
      </PrimaryButton>
    );

    // get the priamry button with some text
    const ButtonComponent = screen.getByRole("button", { name: /some text/i });
    expect(ButtonComponent).toBeTruthy();
  });
});
