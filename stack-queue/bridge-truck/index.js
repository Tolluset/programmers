/*

1. 트럭이 다리에 오름 +1
2. 트럭이 한칸 전진 만약 이

- 트럭 전진
*/

export default function solution(br, w, tw) {
  let answer = 0;
  const b = [];
  let cnt = 0;

  while (true) {
    console.log("start", tw, b, cnt, b.length);

    // 추가
    if (tw.length !== 0) {
      const sum = b.reduce((acc, v) => acc + v, 0) + tw[0];
      if (b.length !== br) {
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
        b.shift();
        const sum = b.reduce((acc, v) => acc + v, 0) + tw[0];
        if (sum <= w) {
          const t = tw.shift();
          b.push(t);
        } else {
          b.push(null);
        }
        console.log("escape");
      }
    } else {
      if (b.length !== br) {
        b.push(null);
      } else {
        // 탈출
        b.shift();
        b.push(null)
        console.log("escape end");
      }
    }

    cnt++;

    if (tw.length === 0 && b.every((_) => _ === null)) break;

    console.log("end", tw, b, cnt, b.length);
  }

  answer = cnt;

  return answer;
}

/*


  while (true) {
    console.log(tw, b, cnt, b.length);

    if (b.length >= br) {
      b.pop();
      b.unshift(null);
      cnt++;
      console.log("b ft", b);
    }

    if (tw.length === 0 && b.length !== br) b.unshift(null);
    console.log(b);

    if (b.every((_) => _ === null) && b.length === br && tw.length === 0) {
      console.log("eve");
      answer = cnt;
      break;
    }

    if (tw.length !== 0) {
      const r = b.reduce((acc, v) => acc + v, 0) + tw[0];
      console.log("r", r);

      if (r > w) {
        b.unshift(null);
      } else {
        const t = tw.shift();
        b.unshift(t);
      }
    }

    // console.log("t", t);
    cnt++;

    console.log("un", tw, b, cnt, b.length);

    // console.log(tw.length !== 0, b.length !== 0);

    if (cnt === 20) break;
    // if (!(tw.length !== 0 || b.length !== 0)) break;
  }

  answer = cnt;
  return answer;

*/

/*
  switch (act) {
    case "추가":
      // 추가
      if (tw.length !== 0) {
        const sum = b.reduce((acc, v) => acc + v, 0) + tw[0];
        if (b.length !== br && sum <= w) {
          const t = tw.shift();
          b.push(t);
        }
      }
      break;
    case "전진":
      // 전진
      if (b.length !== br) {
        b.push(null);
      }

      break;
    case "탈출":
      // 탈출
      if (b.length === br) b.shift();

      break;
  }
  cnt++;

*/
