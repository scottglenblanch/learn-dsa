export function peek<T>(list: T[]) {
  const lastIndex = getLastIndex(list);

  return list?.[lastIndex] ?? null;
}

export function pop<T>(list: T[]) {
  const item = peek(list);
  const lastIndex = getLastIndex(list);
  const newList = list.slice(0, lastIndex);

  return { item, newList };
}

export function push<T>(list: T[], item: T) {
  return [...list, item];
}

export function getLastIndex<T>(list: T[]) {
  return list.length - 1;
}
