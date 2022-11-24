import "react-native";
import React from "react";
import { cleanup, render, screen } from "test-utils";

import { GuessLogItem } from "../GuessLogItem";

describe("GuessLogItem", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    render(<GuessLogItem guess={51} roundNumber={0} />);

    // get the guess number
    const GuessNumber = screen.getByRole("text", { name: /#0/i });
    expect(GuessNumber).toBeTruthy();

    // get the round number
    const RoundNumber = screen.getByRole("text", { name: /Opponent's Guess: 51/i });
    expect(RoundNumber).toBeTruthy();
  });
});
