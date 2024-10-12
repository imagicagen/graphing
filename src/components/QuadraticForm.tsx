import React from 'react';

interface QuadraticFormProps {
  coefficients: { a: number; b: number; c: number };
  setCoefficients: React.Dispatch<React.SetStateAction<{ a: number; b: number; c: number }>>;
}

const QuadraticForm: React.FC<QuadraticFormProps> = ({ coefficients, setCoefficients }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCoefficients(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Quadratic Equation: y = ax² + bx + c</h2>
      <div className="flex space-x-4">
        {['a', 'b', 'c'].map(coeff => (
          <div key={coeff} className="flex-1">
            <label htmlFor={coeff} className="block text-sm font-medium text-gray-700 mb-1">
              {coeff}
            </label>
            <input
              type="number"
              id={coeff}
              name={coeff}
              value={coefficients[coeff as keyof typeof coefficients]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuadraticForm;