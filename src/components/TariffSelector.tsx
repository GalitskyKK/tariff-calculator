import React from 'react';
import './TariffSelector.scss';
import { TariffType } from '../types';

interface TariffSelectorProps {
  onChange: (tariff: TariffType) => void;
}

const TariffSelector: React.FC<TariffSelectorProps> = ({ onChange }) => {
  return (
    <div className="tariff-selector">
      <div className="tariff-card">
        <input
          type="radio"
          id="standard"
          name="tariff"
          value="standard"
          onChange={(e) => onChange(e.target.value as TariffType)}
        />
        <label htmlFor="standard">
          <h3>Стандартный</h3>
          <p>100 руб в месяц</p>
          <p>1000 руб в год</p>
        </label>
      </div>
      <div className="tariff-card">
        <input
          type="radio"
          id="advanced"
          name="tariff"
          value="advanced"
          onChange={(e) => onChange(e.target.value as TariffType)}
        />
        <label htmlFor="advanced">
          <h3>Продвинутый</h3>
          <p>150 руб в месяц</p>
          <p>1400 руб в год</p>
        </label>
      </div>
    </div>
  );
};

export default TariffSelector;
