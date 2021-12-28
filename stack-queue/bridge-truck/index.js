export default function solution(br, w, tw) {
  let answer = 0;
  const b = [];
  let cnt = 0;

  while (true) {
    console.log("start", tw, b, cnt, b.length);

    // 추가
    if (b.length === br) b.shift();

    if (tw.length !== 0) {
      const sum = b.reduce((acc, v) => acc + v, 0) + tw[0];
      if (sum <= w) {
        const t = tw.shift();
        b.push(t);
        console.log("add");
      } else {
        // 전진
        b.push(null);
        console.log("move forward");
      }
    } else {
      // 탈출
      b.push(null);
      console.log("escape end");
    }

    cnt++;

    if (tw.length === 0 && b.every((_) => _ === null)) break;

    console.log("end", tw, b, cnt, b.length);
  }

  answer = cnt;

  return answer;
}
