import sol, { arrayToMap, priorIterator, findLocInMap } from ".";

describe("arrayToMap", () => {
  test("check array to map", () => {
    const items = [2, 1, 3, 2];

    const map = arrayToMap(items);

    const expected = new Map([
      [0, 2],
      [1, 1],
      [2, 3],
      [3, 2],
    ]);

    expect(map).toEqual(expected);
  });

  test("just one item", () => {
    const items = [1];

    const map = arrayToMap(items);

    const expected = new Map([[0, 1]]);

    expect(map).toEqual(expected);
  });
});

describe("priorIterator", () => {
  test("normal", () => {
    const q = new Map([
      [0, 2],
      [1, 1],
      [2, 3],
      [3, 2],
    ]);

    const iter = priorIterator(q);

    const expected = new Map([
      [2, 3],
      [3, 2],
      [0, 2],
      [1, 1],
    ]);

    expect(iter).toEqual(expected);
  });

  test("just one item", () => {
    const q = new Map([[0, 2]]);

    const iter = priorIterator(q);

    const expected = new Map([[0, 2]]);

    expect(iter).toEqual(expected);
  });
});

describe("findLocInMap", () => {
  test("normal", () => {
    const map = new Map([
      [2, 3],
      [3, 2],
      [0, 2],
      [1, 1],
    ]);

    const loc = 2;

    const ans = findLocInMap(map, loc);

    const expected = 1;

    expect(ans).toEqual(expected);
  });

  test("just one item", () => {
    const map = new Map([[0, 2]]);

    const loc = 0;

    const ans = findLocInMap(map, loc);

    const expected = 1;

    expect(ans).toEqual(expected);
  });
});

describe("solution", () => {
  test("normal", () => {
    const prior = [2, 1, 3, 2];
    const loc = 2;

    const answer = 1;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("iter it once more", () => {
    const prior = [1, 2, 3, 2];
    const loc = 2;

    const answer = 1;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("same iterms", () => {
    const prior = [1, 1, 1, 1];
    const loc = 2;

    const answer = 3;

    expect(sol(prior, loc)).toEqual(answer);
  });

  test("no changes", () => {
    const prior = [3, 2, 1, 1];
    const loc = 2;

    const answer = 3;

    expect(sol(prior, loc)).toEqual(answer);
  });
});
