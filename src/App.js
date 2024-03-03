import logo from './logo.svg';
import './App.css';
import Crypto_provider from './Crypto_provider';
import Cryptolist from './Cryptolist';
import Added_crypto from './Added_crypto';

function App() {
  return (
    <div className="App">
    <h2>CRYPTO CURRENCY</h2>
    <Crypto_provider>
    <Cryptolist></Cryptolist>
    <Added_crypto></Added_crypto>
    </Crypto_provider>
   
    </div>
  );
}

export default App;
