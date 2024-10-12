import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { Share2, Info } from 'lucide-react';
import QuadraticForm from './components/QuadraticForm';
import EquationDetails from './components/EquationDetails';
import PresetExamples from './components/PresetExamples';
import { calculateQuadraticProperties } from './utils/quadraticUtils';

const App: React.FC = () => {
  const [coefficients, setCoefficients] = useState({ a: 1, b: 0, c: -1 });
  const [showTooltip, setShowTooltip] = useState(false);

  const { vertex, roots, axisOfSymmetry, direction } = calculateQuadraticProperties(coefficients);

  const generatePlotData = () => {
    const x = Array.from({ length: 201 }, (_, i) => i / 10 - 10);
    const y = x.map(xi => coefficients.a * xi ** 2 + coefficients.b * xi + coefficients.c);

    return [
      { x, y, type: 'scatter', mode: 'lines', name: 'Parabola', line: { color: 'blue' } },
      { x: [vertex.x], y: [vertex.y], type: 'scatter', mode: 'markers', name: 'Vertex', marker: { color: 'red', size: 10 } },
      { x: [axisOfSymmetry, axisOfSymmetry], y: [Math.min(...y), Math.max(...y)], type: 'scatter', mode: 'lines', name: 'Axis of Symmetry', line: { color: 'green', dash: 'dash' } },
      ...(roots.length ? [{ x: roots, y: [0, 0], type: 'scatter', mode: 'markers', name: 'Roots', marker: { color: 'purple', size: 10 } }] : []),
    ];
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('a', coefficients.a.toString());
    url.searchParams.set('b', coefficients.b.toString());
    url.searchParams.set('c', coefficients.c.toString());
    navigator.clipboard.writeText(url.toString());
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Quadratic Equation Explorer</h1>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <QuadraticForm coefficients={coefficients} setCoefficients={setCoefficients} />
            <PresetExamples setCoefficients={setCoefficients} />
            <EquationDetails coefficients={coefficients} vertex={vertex} roots={roots} axisOfSymmetry={axisOfSymmetry} direction={direction} />
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={handleShare}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              >
                <Share2 className="mr-2" size={18} /> Share Graph
              </button>
              <div className="relative">
                <Info
                  className="text-gray-500 cursor-pointer"
                  size={24}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded text-sm w-64">
                    Explore quadratic equations by adjusting the coefficients. The graph updates in real-time!
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Plot
              data={generatePlotData()}
              layout={{
                title: 'Quadratic Function',
                xaxis: { title: 'x' },
                yaxis: { title: 'y' },
                showlegend: true,
                legend: { orientation: 'h', y: -0.2 },
                hovermode: 'closest',
                margin: { t: 50, b: 50, l: 50, r: 50 },
              }}
              config={{ responsive: true, scrollZoom: true }}
              style={{ width: '100%', height: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;