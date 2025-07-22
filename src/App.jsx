import { useState } from "react"

function App(){
    const valores=[
      {color:"red",alto:77},
      {color:"olive",alto:177},
      {color:"orange",alto:101}
    ]
    const[altura,setAltura]=useState(109);
    const aumentar=()=>{
      (altura>=225)
      ? setAltura(10)
      : setAltura(altura+25)
    }
    return (
        <>
            <div className="container containerGrande"> 
                {valores.map((valor,i)=>
                <div key={i} className="barra animar">
                style={{"--altura":`${altura}px`,
                  left:`${10+(i*1000)}px`,
                  backgroundColor:valor.color,
                  transition:'height 1s ease-out'
                }}
               onClick={aumentar}
                    
                </div>
              )}
            </div>

        </>

    )
}

export default App