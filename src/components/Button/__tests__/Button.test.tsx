import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import { Button } from "../Button";

describe("Button component", () => {
  it("should run callback", () => {
    const handleClick = jest.fn();

    const { container } = render(
      <Button handleClick={handleClick} text="button" />
    );

    fireEvent(
      getByText(container, "button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(handleClick).toBeCalledTimes(1);
  });
});
