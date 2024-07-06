import React from 'react';
import { PeriodType } from '../types';

interface PeriodSelectorProps {
  onChange: (period: PeriodType) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ onChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="period"
          value="monthly"
          onChange={(e) => onChange(e.target.value as PeriodType)}
        />
        За месяц
      </label>
      <label>
        <input
          type="radio"
          name="period"
          value="yearly"
          onChange={(e) => onChange(e.target.value as PeriodType)}
        />
        За год
      </label>
    </div>
  );
};

export default PeriodSelector;
