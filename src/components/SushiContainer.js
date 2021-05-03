import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleSushiClick, sushis}) {
const [sushisCount, setSushiesCount] = useState(0)


 function renderMoreSushi(){
  setSushiesCount((sushisCount)=> (sushisCount + 4) % sushis.length)
 }



  const callSushis = sushis
      .slice(sushisCount, sushisCount + 4)
      .map(singleSushi => (<Sushi key={singleSushi.id} sushi={singleSushi} onEatSushi={handleSushiClick} />)
     )

  return (
    <div className="belt">
      {callSushis}
      <MoreButton handleMoreClick={renderMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
