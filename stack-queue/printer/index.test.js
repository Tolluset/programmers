import sol, { arrayToMap } from ".";

describe("arrayToMap", () => {
  test("check array to map", () => {
    const items = [2, 1, 3, 2];

    const map = arrayToMap(items);

    const expectedMap = new Map([
      [0, 2],
      [1, 1],
      [2, 3],
      [3, 2],
    ]);

    expect(arrayToMap(map)).toEqual(expectedMap);
  });

  test("just one item", () => {
    const items = [1];

    const map = arrayToMap(items);

    const expectedMap = new Map([[0, 1]]);

    expect(arrayToMap(map)).toEqual(expectedMap);
  });
});

describe("solution", () => {
  test("just thing", () => {
    const prior = [2, 1, 3, 2];
    const loc = 2;

    const answer = 1;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("1", () => {
    const prior = [1, 2, 3, 2];
    const loc = 2;

    const answer = 1;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("2", () => {
    const prior = [1, 1, 1, 1];
    const loc = 2;

    const answer = 3;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("3", () => {
    const prior = [3, 2, 1, 1];
    const loc = 2;

    const answer = 3;

    expect(sol(prior, loc)).toEqual(answer);
  });
});
