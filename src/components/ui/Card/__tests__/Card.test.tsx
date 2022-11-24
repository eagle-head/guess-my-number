import "react-native";
import React from "react";
import { render, screen, cleanup } from "test-utils";
import { Card } from "../Card";
import { Text } from "react-native";

jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  return {
    get: () => ({
      width: 375,
      height: 667,
    }),
    addEventListener: jest.fn(),
  };
});

describe("Card", () => {
  afterEach(cleanup);

  test("should renders correctly", () => {
    render(
      <Card>
        <Text accessibilityRole="text">Some Children</Text>
      </Card>
    );

    // get the card component
    const CardComponent = screen.getByRole("text", { name: /some children/i });
    expect(CardComponent).toBeTruthy();
  });
});
