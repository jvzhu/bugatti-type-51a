import React, { useState } from 'react';
import '../styles/SpecsTable.css';

const SpecsTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('category');

  const specs = [
    { category: 'Engine Type', value: '8-cylinder, twin overhead cam', unit: '' },
    { category: 'Displacement', value: 2262, unit: 'cc' },
    { category: 'Horsepower', value: 200, unit: 'hp' },
    { category: 'Top Speed', value: 145, unit: 'mph' },
    { category: 'Acceleration 0-60', value: 3.9, unit: 'sec' },
    { category: 'Wheelbase', value: 108, unit: 'inches' },
    { category: 'Curb Weight', value: 1540, unit: 'lbs' },
    { category: 'Fuel Tank', value: 22, unit: 'gallons' },
    { category: 'Transmission', value: 'Manual 4-speed', unit: '' },
  ];

  const filtered = specs.filter(spec =>
    spec.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="specs-table-container">
      <h2>Technical Specifications</h2>
      <input
        type="text"
        placeholder="Search specifications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="specs-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((spec, idx) => (
            <tr key={idx} className="spec-row">
              <td>{spec.category}</td>
              <td className="spec-value">{spec.value}</td>
              <td className="spec-unit">{spec.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsTable;
