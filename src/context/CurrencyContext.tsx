import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface CurrencyContextProps {
  rates: { [key: string]: number };
  fetchRates: () => void;
}

export const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});

  const fetchRates = async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/RUB');
      setRates(response.data.rates);
    } catch (error) {
      console.error('Error fetching currency rates:', error);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{ rates, fetchRates }}>{children}</CurrencyContext.Provider>
  );
};
