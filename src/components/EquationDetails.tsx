import React from 'react';

interface EquationDetailsProps {
  coefficients: { a: number; b: number; c: number };
  vertex: { x: number; y: number };
  roots: number[];
  axisOfSymmetry: number;
  direction: 'Upward' | 'Downward';
}

const EquationDetails: React.FC<EquationDetailsProps> = ({
  coefficients,
  vertex,
  roots,
  axisOfSymmetry,
  direction,
}) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Equation Details</h3>
      <p className="mb-2">
        <strong>Equation:</strong> y = {coefficients.a}x² {coefficients.b >= 0 ? '+' : ''}{coefficients.b}x {coefficients.c >= 0 ? '+' : ''}{coefficients.c}
      </p>
      <p className="mb-2">
        <strong>Vertex:</strong> ({vertex.x.toFixed(2)}, {vertex.y.toFixed(2)})
      </p>
      <p className="mb-2">
        <strong>Axis of Symmetry:</strong> x = {axisOfSymmetry.toFixed(2)}
      </p>
      <p className="mb-2">
        <strong>Roots:</strong> {roots.length ? roots.map(root => root.toFixed(2)).join(', ') : 'No real roots'}
      </p>
      <p>
        <strong>Direction:</strong> {direction}
      </p>
    </div>
  );
};

export default EquationDetails;