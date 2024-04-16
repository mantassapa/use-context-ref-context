import './App.css';
import { MainTheme } from './contexts/mainTheme';
import Senelis from './components/Senelis';
import { SenelioKalba } from './contexts/SenelisSako';
import { useState } from 'react';
import { SenelisAtimaSk } from './contexts/SenelisAtimaSk';
import ColoredGrandpa from './components/ColoredGrandpa';
import { getRandomColor } from './functions/randomColor';


function App() {
  const [senelioSk, setSenelioSk]=useState(0)
  const [senelioSkMinus, setSenelioSkMinus]=useState(0)
  const [theme, setTheme] = useState({})
  const randomColor = getRandomColor()
  const [ranColor, setRanColor] = useState(randomColor)


  
  return (
    <div className="App">
      <MainTheme.Provider value={{
        theme:{backgroundColor: ranColor , color: "orange"},
        text: "labas",
        }}>
        <ColoredGrandpa/>
      </MainTheme.Provider>
      <button onClick={()=>setRanColor(getRandomColor())}>change Color</button>
      <button onClick={() => {
        setSenelioSk((prev) => prev + 1)
        setSenelioSkMinus((prev=>prev-4))
        }}>Senelis skaicioja</button>
      <SenelioKalba.Provider value={{text: "labas, anukeli", sk:senelioSk}}>
        <SenelisAtimaSk.Provider value={senelioSkMinus}>
          <Senelis/>
        </SenelisAtimaSk.Provider>
      </SenelioKalba.Provider>
    </div>
  );
}

export default App;
