export default function solution(br, w, tw) {
  let answer = 0;
  const b = [];
  let cnt = 0;

  while (true) {
    if (b.length === br) b.shift();

    if (tw.length !== 0) {
      const sum = b.reduce((acc, v) => acc + v, 0) + tw[0];
      if (sum <= w) {
        const t = tw.shift();
        b.push(t);
      } else {
        b.push(null);
      }
    } else {
      b.push(null);
    }

    cnt++;

    if (tw.length === 0 && b.every((_) => _ === null)) break;
  }

  return cnt;
}
