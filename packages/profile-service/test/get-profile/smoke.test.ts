import { describe, it, expect, vi } from "vitest";
import { testProfilesPackage } from "../../src";

describe("profile-service smoke test", () => {
  it("logs expected message", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    testProfilesPackage();

    expect(spy).toHaveBeenCalledWith("Profiles package is connected");

    spy.mockRestore();
  });
});