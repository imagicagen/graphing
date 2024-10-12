import React from 'react';

interface PresetExamplesProps {
  setCoefficients: React.Dispatch<React.SetStateAction<{ a: number; b: number; c: number }>>;
}

const PresetExamples: React.FC<PresetExamplesProps> = ({ setCoefficients }) => {
  const presets = [
    { name: 'Basic Parabola', coeffs: { a: 1, b: 0, c: 0 } },
    { name: 'Inverted Parabola', coeffs: { a: -1, b: 0, c: 4 } },
    { name: 'Two Roots', coeffs: { a: 1, b: -5, c: 6 } },
    { name: 'One Root', coeffs: { a: 1, b: -4, c: 4 } },
    { name: 'No Roots', coeffs: { a: 1, b: 0, c: 1 } },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Preset Examples:</h3>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset, index) => (
          <button
            key={index}
            onClick={() => setCoefficients(preset.coeffs)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition-colors"
          >
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetExamples;