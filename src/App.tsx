import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import TariffCalculator from './components/TariffCalculator';
import './App.scss';

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <div className="App">
        <h1>Тарифный калькулятор</h1>
        <TariffCalculator />
      </div>
    </CurrencyProvider>
  );
};

export default App;
