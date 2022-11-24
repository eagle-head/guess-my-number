import "react-native";
import React from "react";
import { cleanup, render, screen } from "test-utils";
import { InstructionText } from "../InstructionText";

describe("InstructionText", () => {
  afterEach(cleanup);

  test("should renders correctly", () => {
    render(<InstructionText>Some Children</InstructionText>);

    const InstructionComponent = screen.getByRole("header", { name: /some children/i });
    expect(InstructionComponent).toBeTruthy();
  });
});
