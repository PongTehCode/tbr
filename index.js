function sum(...n) {
  return n.reduce(
    (rslt, a) => (Array.isArray(a) ? sum(...a) : Number(rslt) + Number(a)),
    0
  );
}

module.exports.sum = sum;
