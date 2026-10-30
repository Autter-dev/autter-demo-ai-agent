import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";
import { z } from "zod";

const lock = JSON.parse(
  readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"),
) as { packages: Record<string, { version?: string }> };

function lockedVersion(name: string): string | undefined {
  return lock.packages[`node_modules/${name}`]?.version;
}

describe("dependency security bumps", () => {
  const pins: Array<[string, string]> = [
    ["nanoid", "3.3.16"],
    ["postcss", "8.5.18"],
    ["source-map-js", "1.2.2"],
    ["zod", "4.6.6"],
  ];

  test("lockfile resolves CVE-fixed versions", () => {
    for (const [pkg, version] of pins) {
      expect(lockedVersion(pkg), `${pkg} should be ${version}`).toBe(version);
    }
  });

  test("zod 4 API surface is available", () => {
    const schema = z.looseObject({ a: z.string() });
    expect(schema.parse({ a: "x", extra: 1 })).toEqual({ a: "x", extra: 1 });
  });
});
