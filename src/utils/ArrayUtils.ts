export function* SequenceGenerator(from: number, to: number) {
  while (to >= from) {
    yield from++;
  }
}
