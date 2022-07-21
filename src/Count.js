import React from 'react'
import { useState, useEffect, use} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/counter'

const Count = (key) => {

  const { value } = useSelector(state => state.count)
  const dispatch = useDispatch()

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
      <div className="counter-btn counter-total counter-total-3" onClick={()=> dispatch(increment())}>{value}</div>
     </div>
    </div>
</div>
  )
}

export default Count