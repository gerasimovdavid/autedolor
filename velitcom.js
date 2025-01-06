function makeWalkTree(data) {
  const tree = {};
  for (const item of data) {
    const path = item.path.split('/');
    let currentNode = tree;
    for (let i = 0; i < path.length - 1; i++) {
      const dir = path[i];
      if (!currentNode[dir]) {
        currentNode[dir] = {};
      }
      currentNode = currentNode[dir];
    }
    currentNode[path[path.length - 1]] = item;
  }
  return tree;
}
