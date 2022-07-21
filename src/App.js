
import './App.css';
import Count from './Count';

function App() {
    let a= [];
    let j=0
    for(let i=0; i<18;i++){
      j++
      a.push({number : j})
    }
  
  return (
    <div className="App">
      <div className="slideout-container">
        <main id="panel" className="slideout-panel slideout-panel-left">
          <div className="content top-home m-3 text-center" style={{direction: "rtl"}}>
            <div className="row" id="jojo">

                {
                  a.map((item, index) => <Count key={index} prop={index}/>)
                }

            </div>
            </div>
          </main>
        </div>
    </div>
  );
}



export default App;
