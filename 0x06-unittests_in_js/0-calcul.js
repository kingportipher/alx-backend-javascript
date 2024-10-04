function calculateNumber(a, b) {
  // Round both a and b
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Return the sum of the rounded numbers
  return roundedA + roundedB;
}

module.exports = calculateNumber;
