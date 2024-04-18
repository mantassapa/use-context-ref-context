import './App.css';
import { MainTheme } from './contexts/mainTheme';
import Senelis from './components/Senelis';
import { SenelioKalba } from './contexts/SenelisSako';
import { useEffect, useRef, useState } from 'react';
import { SenelisAtimaSk } from './contexts/SenelisAtimaSk';
import ColoredGrandpa from './components/ColoredGrandpa';
import { getRandomColor } from './functions/randomColor';
import axios from "axios"
import Reduser from './components/reduse-compon/Reduser';
import ReducerSq from './components/reduse-compon/ReducerSq';
import ReduserInput from './components/reduse-compon/ReduserInput';
import UserReducer from './components/reduse-compon/UserReducer';
import UseCalback from './components/useCalback/UseCalback';
import UseMemo from './components/useCalback/UseMemo';


function App() {
  const [senelioSk, setSenelioSk]=useState(0)
  const [senelioSkMinus, setSenelioSkMinus]=useState(0)
  const [theme, setTheme] = useState({})
  const randomColor = getRandomColor()
  const [ranColor, setRanColor] = useState(randomColor)


  //Ref---------------------------

  // const colored = useRef()
  // const [isVisible, setIsVisible] = useState(false)

  // const element = useRef()

  // const makeColored =()=>{
  //   // document.querySelector("h2").style.color = "green"
  //   colored.current.style.color="red"
  // }

  // useEffect(()=>{
  //   const handlescroll=()=>{
  //     if(window.scrollY>20){
  //       setIsVisible(true)
  //     }else{
  //       setIsVisible(false)
  //     }
  //   }
  //   window.addEventListener("scroll", handlescroll)

  //   return ()=>{
  //     window.removeEventListener("scroll", handlescroll)
  //   }
  // },[])
  // const focusInput = useRef()
  // useEffect(()=>{
  //   focusInput.current.focus()
  // },[])


  //ref api -------

  const [userList, setUserList] = useState([])
  
  const users = useRef([])

  useEffect(()=>{
    axios
        .get("https://reqres.in/api/users?page=2")
        .then((res)=>{
          users.current = res.data.data
          setUserList(users.current.filter((use)=>
            use.first_name==="Michael"||use.first_name==="Lindsay"
            ))    
          })

  },[])

  // let count = 123
  // const [counting, setCounting] = useState(123)
  // const countref = useRef(123)
  
  // const handleCount = () =>{
  //   console.log("veriable", ++count);

  // }
  return (
    <div className="App">
      {/* Context--------------------------------- */}
      {/* <MainTheme.Provider value={{
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
      </SenelioKalba.Provider> */}

      
      {/* REF--------------------------------------------------------------- */}
      
      {/* <div>
        <button onClick={handleCount}>Count</button>
        <p>{count}</p>
        <button onClick={()=>setCounting((prev)=>prev+1)}>Count</button>
        <p>{counting}</p>
        <button onClick={()=>console.log("ref", ++countref.current)}>Count</button>
        <p>{countref.current}</p>
      </div> */}
      
      {/* <div>
        <button onClick={()=>setUserList(users.current)}>All</button>
        {userList.map((user)=>(
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name}/>
            <p>{user.first_name}</p>
          </div>
        ))

        }
      </div> */}

      {/* <input type="text" />
      <input type="text" ref={focusInput}/>
      <input type="text" /> */}


      {/* <div style={{height:"3000px"}}>   
        <header>This is Header</header>
        {isVisible&& (
          <header
          ref={element}
          style={{
            width:"100vw",
            height: "200px",
            backgroundColor: "green",
            position: "fixed",
            top: "0"
          }}
          >
            this is fixed header
          </header>
        )}
      <button onClick={makeColored}> Make colored text</button>
      <h2 ref={colored}>i'm colored text</h2>
      </div> */}

    {/* reduser---------------------------- */}
      {/* <Reduser/>
      <ReducerSq/>
      <ReduserInput/> */}
      {/* <UserReducer/> */}

      {/* calback------------------------- */}
      {/* <UseCalback/> */}
      <UseMemo/>
    </div>
  );
}

export default App;
