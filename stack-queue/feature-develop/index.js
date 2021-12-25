/*
  k + ax = end
  p + s * x = 100
  x = ( 100 - p ) / s
  x = ceil(( 100 - p ) / s)
*/

export default function sol(prog, speed) {
  const answer = [];

  const progOrder = prog.map((p, idx) => Math.ceil((100 - p) / speed[idx]));

  let pter = 1;
  let cnt = 1;

  while (progOrder.length) {
    if (progOrder[0] < progOrder[pter] || progOrder.length === pter) {
      answer.push(cnt);

      for (let i = 0; i < cnt; i++) {
        progOrder.shift();
      }

      if (progOrder.length === 1) {
        answer.push(1);
        progOrder.shift();
      }

      pter = 1;
      cnt = 1;
    } else {
      pter++;
      cnt++;
    }
  }

  return answer;
}
