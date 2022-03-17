export function isTriangle(
  edge1: number,
  edge2: number,
  edge3: number
): boolean {
  if (edge1 >= edge2 + edge3) return false;
  if (edge2 >= edge1 + edge3) return false;
  if (edge3 >= edge2 + edge1) return false;

  return true;
}
