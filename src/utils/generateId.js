export function generateId(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
