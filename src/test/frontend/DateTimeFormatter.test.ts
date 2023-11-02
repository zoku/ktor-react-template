import {expect, test} from "vitest"
import {DateTimeFormatter} from "../../main/frontend/lib/DateTimeFormatter"

test("DateTimeFormatter ISO format", () => {
  const dtf = DateTimeFormatter("iso")
  expect(dtf.format(new Date("2023-05-01"))).toBe("2023-05-01")
})