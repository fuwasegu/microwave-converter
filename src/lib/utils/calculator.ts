export function calculateHeatingTime(
  originalWattage: number,
  originalTime: number,
  targetWattage: number
): number {
  return (originalWattage / targetWattage) * originalTime;
} 