function findXYZ({ start = 0, end = 10 } = {}) {
  const solutions = [];
  for (let x = start; x < end; x++) {
    for (let y = start; y < end; y++) {
      for (let z = start; z < end; z++) {
        if (3 * x + 9 * y + 8 * z === 20) {
          // eslint-disable-line
          solutions.push({ x, y, z });
        }
      }
    }
  }
  return solutions;
}

console.log("findXYZ :>> ", findXYZ());
