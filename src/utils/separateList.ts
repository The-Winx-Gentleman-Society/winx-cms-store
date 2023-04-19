function separateList(list: [], max: number) {
  let res = [[]];
  let group = 0;

  for (let i = 0; i < list.length; i++) {
    if (res[group] === undefined) {
      res[group] = [];
    }

    res[group].push(list[i]);

    if ((i + 1) % max === 0) {
      group = group + 1;
    }
  }

  return res;
}

export { separateList }
