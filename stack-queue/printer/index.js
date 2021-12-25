export default function solution(prior, loc) {
  let answer = 0;

  const priorMap = arrayToMap(prior);
  const prioredMap = priorIterator(priorMap);

  let i = 0;
  prioredMap.forEach((v, k) => {
    i++;
    if (k === loc) {
      answer = i;
    }
  });

  return answer;
}

export const arrayToMap = (items) => {
  const result = new Map();
  items.forEach((item, idx) => result.set(idx, item));
  return result;
};

export const priorIterator = (queue) => {
  let cnt = 0;

  while (cnt < queue.size - 1) {
    const qe = [...queue.entries()];
    const qei = qe[cnt][0];
    const qev = qe[cnt][1];

    const qes = qe.splice(cnt).some((v) => v[1] > qev);

    if (qes) {
      queue.delete(qei);
      queue.set(qei, qev);
    } else {
      cnt++;
    }
  }
  return queue;
};
