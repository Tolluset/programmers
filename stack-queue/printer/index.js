export default function solution(prior, loc) {
  const priorMap = arrayToMap(prior);
  const mapIterator = priorIterator(priorMap);
  const answer = findLocInMap(mapIterator, loc);

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

export const findLocInMap = (map, loc) => {
  const iter = map[Symbol.iterator]();

  for (let i = 1; i < map.size + 1; i++) {
    if (iter.next().value[0] === loc) return i;
  }
};
