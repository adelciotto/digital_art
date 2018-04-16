export function getRandomNumberInRange (lower, upper) {
  return Math.random() * (upper - lower) + lower
}

export function getRandomIntegerInRange (lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower
}
