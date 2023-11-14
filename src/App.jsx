import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);



  const style = { 
    fondo:{ 
      backgroundColor: 'white',
      borderRadius: 15,
      border: '1 solid',
      color: 'black',
      margin: 15
    },
    titulo: { 
      color: 'black',
    },
    tit: { 
      color: 'white',
    },
    numero: {
      color: 'blue',
    },
    boton: { 
      color: 'white',
      border: '1 solid rgba(255,255,255, 1)',
      backgroundColor: 'cyan',
      margin: 3,
      width: 80,
      fontSize: 30,
      height: 50,
      padding: 0,
    },
};


  return (
    <>
      <h2 style={style.tit}>Boca de urnas</h2>
      <br />
      <div className="card" style={style.fondo}>
         <h3 style={style.titulo}>Candidato 1</h3>
         <h1 id="result1" style={style.numero}>{count}</h1>
         <div sx={{ display: "flex", flexDirection:'row'}}>
          <button style={style.boton} onClick={() => setCount((count) => count + 1)}>
            + 
          </button>
          <button style={style.boton} onClick={() => setCount((count) => count !== 0 ? count - 1 : 0)}>
            - 
          </button>
         </div>
        

      </div>


      <div className="card" style={style.fondo}>
      <h3 style={style.titulo}>Candidato 2</h3>
        <h1 id="result1" style={style.numero}>{count2}</h1>
        <div sx={{ display: "flex", flexDirection:'row'}}>
          <button style={style.boton} onClick={() => setCount2((count2) => count2 + 1)}>
           <b>+</b>  
          </button>
          <button style={style.boton} onClick={() => setCount2((count2) => count2 !== 0 ? count2 - 1 : 0 )}>
           <b>-</b>  
          </button>
        </div>

      </div>

    </>
  )
}

export default App
