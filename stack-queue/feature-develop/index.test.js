import sol from ".";

test("normal case", () => {
  const prog = [93, 30, 55];
  const speed = [1, 30, 5];

  const answer = [2, 1];

  expect(sol(prog, speed)).toEqual(answer);
});

test("just one by one", () => {
  const prog = [95, 90, 99, 99, 80, 99];
  const speed = [1, 1, 1, 1, 1, 1];

  const answer = [1, 3, 2];

  expect(sol(prog, speed)).toEqual(answer);
});
