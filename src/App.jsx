import { useState, useRef} from "react"

function App(){
    const elementoRef=useRef(null);
    const valores=[
      {color:"red",alto:77},
      {color:"olive",alto:177},
      {color:"orange",alto:101}
    ];
    const[altura,setAltura]=useState(109);
    const aumentar=()=>{
      elementoRef.current.classList.toggle('stop')
    }
    return (
            <div className="container "> 
              <div 
              ref={elementoRef} 
              className="barra roja animar"
              onClick={aumentar}
              style={{"--altura":`${altura}px`}}
              >
                
                
               
                    
                </div>
              
            </div>



    )
}

export default App;