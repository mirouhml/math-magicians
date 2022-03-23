import Calculator from './Calculator';

const CalculatorPage = () => (
  <div className="background calculator-page">
    <div>
      <h2>Let&apos;s do some math!</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Math_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="Math Gif" />
    </div>
    <div className="calculator">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
