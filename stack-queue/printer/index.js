export default function solution(prior, loc) {
  const map = arrayToMap(prior);
  const iter = priorIterator(map);

  return findLocInMap(iter, loc);
}

export const arrayToMap = (items) => {
  const res = new Map();
  items.forEach((item, idx) => res.set(idx, item));
  return res;
};

export const priorIterator = (q) => {
  let cnt = 0;

  while (cnt < q.size - 1) {
    const qe = [...q.entries()];
    const qei = qe[cnt][0];
    const qev = qe[cnt][1];

    const qes = qe.splice(cnt).some((v) => v[1] > qev);

    if (qes) {
      q.delete(qei);
      q.set(qei, qev);
    } else {
      cnt++;
    }
  }
  return q;
};

export const findLocInMap = (map, loc) => {
  return [...map].findIndex((v) => v[0] === loc) + 1;
};
