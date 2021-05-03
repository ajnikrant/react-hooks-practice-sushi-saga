import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
const [sushis, setSushies] = useState([])
const [wallet, setWallet] = useState(100);



useEffect(()=>{
  fetch('http://localhost:3001/sushis')
  .then(res => res.json())
  .then((sushis) => {
          const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushies(updatedSushis);
      });
}, []);


function handleSushiClick(eatenSushi){
  if (wallet >= eatenSushi.price)
    {const updatedEatenSushis = sushis.map((sushi) => {
    if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
    return sushi;
  })
    

    setSushies(updatedEatenSushis);
    setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  function handleAddMoney(){
    console.log("MONEY"
    )
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleSushiClick={handleSushiClick}/>
      <Table wallet={wallet} onAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;


