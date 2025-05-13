import './index.css'
import React from 'react';

export default function Calculadora(){
  return(
    <div className="container">
      <h1>Calculadora Simples</h1>

      <input placeholder="Digite o primeiro número"></input>
      <input placeholder="Digite o segundo número"></input>

      <div>
        <button className='buttonSum' id='buttonSum'>Somar</button>
        <button className='buttonSub' id='buttonSub'>Subtrair</button>
        <button className='buttonMult' id='buttonMult'>Multiplicar</button>
        <button className='buttonDiv' id='buttonDiv'>Dividir</button>
      </div>

      <p>Resultado:</p>
    </div>
  )
}
  