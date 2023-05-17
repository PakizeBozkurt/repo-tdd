// it("should work", () => {
//   const left = 1;
//   const right = 2;

//   const result = left + right;

//   expect(result).toBe(3);
// });

// it("should work", () => {
//   const left = 2;
//   const right = 2;

//   const result = left + right;

//   expect(result).toBe(5);
// });
function rps(left) {
  return left === "rock" ? "left" : "right";
}
describe("rock, paper, scissors", () => {
it("should say right wins for scissors vs. rock", () => {
  const left = "scissors";
  const right = "rock";

  const result = rps(left, right);

  expect(result).toBe("right");
});
});
