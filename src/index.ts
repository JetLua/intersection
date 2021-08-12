export default function(a: Line, b: Line) {
  const denominator = ((b.q.y - b.p.y) * (a.q.x - a.p.x)) - ((b.q.x - b.p.x) * (a.q.y - a.p.y))

  if (denominator === 0) return

  let m = a.p.y - b.p.y
  let n = a.p.x - b.p.x

  const u = ((b.q.x - b.p.x) * m) - ((b.q.y - b.p.y) * n)
  const v = ((a.q.x - a.p.x) * m) - ((a.q.y - a.p.y) * n)

  m = u / denominator
  n = v / denominator

  const result: Partial<{
    x: number
    y: number
    onA: boolean
    onB: boolean
  }> = {}

  result.x = a.p.x + (m * (a.q.x - a.p.x))
  result.y = a.p.y + (m * (a.q.y - a.p.y))

  if (m > 0 && m < 1) result.onA = true
  if (n > 0 && n < 1) result.onB = true

  return result
}

interface Line {
  p: Point
  q: Point
}

interface Point {
  x: number
  y: number
}
