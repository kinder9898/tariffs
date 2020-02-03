import React from 'react'
import TarifList from './components/Tarif/TarifList/TarifList'

export default function App() {
  return (
    <div>
      <div className="logo">Tele2</div>
      <div className="header"><span className="headerText">Будь на воле даже при нуле</span></div>
      <h1>Тарифы</h1>
      <TarifList/>
    </div>
  )
}
