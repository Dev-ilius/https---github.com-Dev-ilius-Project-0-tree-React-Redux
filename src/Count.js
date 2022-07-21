import React from 'react'
import { useState, useEffect} from 'react'

const Count = (key) => {
let [Counts, setCounter] = useState(()=>{
    let data=(JSON.parse(localStorage.getItem(`${key.prop}`)));
    return data ||0;
})

function updateCount(){setCounter(++Counts);
    localStorage.setItem(`${key.prop}`, JSON.stringify(Counts))
}

  return (
<div className="col-12 col-md-6 col-lg-4 col-xlg-3">
    <div className="card border-primary mb-3">
      <div className="card-header counter-text">Counter</div>
          <div className="card-body text-primary"> 
      <div className="counter-btn counter-total counter-total-3" onClick={()=>{updateCount()
      }}>{Counts}</div>
     </div>
    </div>
</div>
  )
}

export default Count