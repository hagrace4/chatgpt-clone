import './App.css'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions';
import { useState } from 'react';



function App() {
  const [option, setOption] = useState({});
  // console.log(import.meta.env.VITE_OPEN_API_KEY);
  const selectOption = (option) => {
    setOption(option);
  };
  console.log(Object.values(option));
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation />)}
    </div>
  )
}

export default App
