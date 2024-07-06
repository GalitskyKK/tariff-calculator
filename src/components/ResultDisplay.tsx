import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import { TariffType, PeriodType } from '../types';

interface ResultDisplayProps {
  tariff: TariffType;
  period: PeriodType;
  currency: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ tariff, period, currency }) => {
  const { rates } = useContext(CurrencyContext) || { rates: {} };

  const tariffs: Record<TariffType, { monthly: number; yearly: number }> = {
    standard: { monthly: 100, yearly: 1000 },
    advanced: { monthly: 150, yearly: 1400 },
  };

  const price = tariffs[tariff][period];
  const discount = period === 'yearly' ? tariffs[tariff].monthly * 12 - tariffs[tariff].yearly : 0;
  const convertedPrice = rates[currency] ? (price * rates[currency]).toFixed(2) : price.toString();
  const convertedDiscount = rates[currency]
    ? (discount * rates[currency]).toFixed(2)
    : discount.toString();

  return (
    <div>
      <p>
        Сумма для оплаты: {convertedPrice} {currency}
      </p>
      {discount > 0 && (
        <p>
          Скидка: {convertedDiscount} {currency}
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;
