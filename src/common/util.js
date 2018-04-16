export function getRandomNumberInRange (lower, upper) {
  const rnd = Math.random() * upper

  return Math.max(lower, Math.min(rnd, upper))
}
