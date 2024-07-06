import React, { useState } from 'react';
import TariffSelector from './TariffSelector';
import CurrencySelector from './CurrencySelector';
import PeriodSelector from './PeriodSelector';
import ResultDisplay from './ResultDisplay';
import { TariffType, PeriodType } from '../types';
import './TariffCalculator.scss';

const TariffCalculator: React.FC = () => {
  const [tariff, setTariff] = useState<TariffType>('standard');
  const [period, setPeriod] = useState<PeriodType>('monthly');
  const [currency, setCurrency] = useState('CNY');

  return (
    <div className="tariff-calculator">
      <TariffSelector onChange={setTariff} />
      <CurrencySelector onChange={setCurrency} />
      <PeriodSelector onChange={setPeriod} />
      <ResultDisplay tariff={tariff} period={period} currency={currency} />
    </div>
  );
};

export default TariffCalculator;
