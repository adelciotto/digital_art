function getRandomNumberInRange (lower, upper) {
  var rnd = Math.random() * upper

  return Math.max(lower, Math.min(rnd, upper))
}

module.exports = {
  getRandomNumberInRange: getRandomNumberInRange
}
