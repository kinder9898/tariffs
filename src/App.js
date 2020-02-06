import React from 'react'
import TariffList from './components/Tariff/TariffList/TariffList'

export default function App() {
  return (
    <div>
      <div className="logo">Tele2</div>
      <div className="header"><span className="headerText">Будь на воле даже при нуле</span></div>
      <h1>Тарифы</h1>
      <TariffList/>
    </div>
  )
}
