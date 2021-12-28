import sol from ".";

describe("solution", () => {
  test("normal", () => {
    const br = 2;
    const w = 10;
    const tw = [7, 4, 5, 6];

    const answer = 8;

    expect(sol(br, w, tw)).toEqual(answer);
  });

  test("iter it once more", () => {
    const br = 100;
    const w = 100;
    const tw = [10];

    const answer = 101;

    expect(sol(br, w, tw)).toEqual(answer);
  });

  test("same iterms", () => {
    const br = 100;
    const w = 100;
    const tw = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    const answer = 110;

    expect(sol(br, w, tw)).toEqual(answer);
  });
});
