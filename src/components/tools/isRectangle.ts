export function isRectangle(
  edge1: number,
  edge2: number,
  edge3: number,
  edge4: number
): boolean {
  if (edge1 !== edge3 || edge2 !== edge4) return false;
  return true;
}
