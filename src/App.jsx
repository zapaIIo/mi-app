import { useState } from "react"

function App(){
    const[altura,setAltura]=useState(109);
    return (
        <>
        
            <div className="container"> 
                <div className="barra roja animar">
                style={{"--altura":`${altura}px`,
                height:`${altura}px`,
                transition:'height 1s ease-out'}}
                    
                </div>
            </div>

        </>

    )
}

export default App