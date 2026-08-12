import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ActionLink } from "./ActionLink";

describe("ActionLink", () => {
  it("renders the link text", () => {
    render(
      <ActionLink href="/platform">
        Explore platform
      </ActionLink>
    );

    expect(
      screen.getByRole("link", {
        name: "Explore platform",
      })
    ).toBeInTheDocument();
  });

  it("renders the correct href", () => {
    render(
      <ActionLink href="/platform">
        Explore platform
      </ActionLink>
    );

    const link = screen.getByRole("link", {
      name: "Explore platform",
    });

    expect(link).toHaveAttribute("href", "/platform");
  });

  it("uses primary variant by default", () => {
    render(
      <ActionLink href="/platform">
        Explore platform
      </ActionLink>
    );

    const link = screen.getByRole("link", {
      name: "Explore platform",
    });

    expect(link).toHaveClass("bg-blue-500");
  });

  it("renders the secondary variant", () => {
    render(
      <ActionLink href="/platform" variant="secondary">
        Explore platform
      </ActionLink>
    );

    const link = screen.getByRole("link", {
      name: "Explore platform",
    });

    expect(link).toHaveClass("border");
  });
});