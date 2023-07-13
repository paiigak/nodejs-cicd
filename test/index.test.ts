import { min, max, avg } from "../src";

describe("min", () => {
  it("min should be min", () => {
    expect(min([1,12,5,6,7,1.5,9]))
  })
  it("min should be 0", () => {
    expect(min([1,0,5,6,7,0,9]))
  })
  it("min should be minus", () => {
    expect(min([-1,0,-5,6,7,0,9]))
  })
  it("min should be minus", () => {
    expect(min([-1,0,-5,6,7,0,9, -1/0]))
  })
})

describe("max", () => {
  it("max should be max", () => {
    expect(max([1,12,5,6,7,1.5,9]))
  })
  it("max should be 0", () => {
    expect(max([-1,0,-5,-6,-7,0,-9]))
  })
  it("max should be minus", () => {
    expect(max([-1,-1.5,-5,-6,-7,-0.5,-9]))
  })
  it("max should be error", () => {
    expect(avg([-1,-1.5,-5,-6,-7,-0.5, 1/0]))
  })
})

describe("avg", () => {
  it("avg should be right", () => {
    expect(avg([1,12,5,6,7,1.5,9]))
  })
  it("avg should be minus", () => {
    expect(avg([-1,-1.5,-5,-6,-7,-0.5,-9]))
  })
  it("avg should be pass", () => {
    expect(avg([-1,-1.5,-5,-6,-7,-0.5,Number(-9n)]))
  })
  it("avg should be pass", () => {
    expect(avg([-1,-1.5,-5,-6,-7,-0.5,Number(-9n)]))
  })
})

