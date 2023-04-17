import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AnimationTest } from "../AnimationTest";

describe("Box component", () => {
  it("should be visible after clicking show", async () => {
    render(<AnimationTest />);
    fireEvent.click(screen.getByText("Show Box 2"));
    await waitFor(() => screen.getByText("BOX 2"));

    expect(screen.getByText("BOX 2")).toBeInTheDocument();
  });

  it("should not be visible after clicking hide", async () => {
    render(<AnimationTest />);
    fireEvent.click(screen.getByText("Hide Box 1"));

    await waitFor(() => {
      expect(screen.getByText("Show Box 1")).toBeInTheDocument();
    });
  });

  it("should have correct className", () => {
    const { container } = render(<AnimationTest />);

    expect(container.firstChild).toHaveClass("container");
  });

  it("should contain 3 box examples", () => {
    const { container } = render(<AnimationTest />);

    expect(container.querySelector(".box-wrapper")?.childNodes.length).toEqual(
      3
    );
  });

  it("should contain 3 buttons", () => {
    const { container } = render(<AnimationTest />);

    expect(container.querySelectorAll("button").length).toBe(3);
  });
});
