export const calculateQuadraticProperties = (coefficients: { a: number; b: number; c: number }) => {
  const { a, b, c } = coefficients;
  
  // Calculate vertex
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX ** 2 + b * vertexX + c;
  
  // Calculate roots
  const discriminant = b ** 2 - 4 * a * c;
  let roots: number[] = [];
  if (discriminant > 0) {
    roots = [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    ];
  } else if (discriminant === 0) {
    roots = [-b / (2 * a)];
  }
  
  // Axis of symmetry
  const axisOfSymmetry = -b / (2 * a);
  
  // Direction
  const direction = a > 0 ? 'Upward' : 'Downward';
  
  return {
    vertex: { x: vertexX, y: vertexY },
    roots,
    axisOfSymmetry,
    direction,
  };
};