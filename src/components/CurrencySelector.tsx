import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

interface CurrencySelectorProps {
  onChange: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onChange }) => {
  const { rates } = useContext(CurrencyContext) || { rates: {} };

  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="CNY">Китайский юань</option>
        <option value="KZT">Казахстанский тенге</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
