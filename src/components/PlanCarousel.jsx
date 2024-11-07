import React from 'react'
const PlanCarousel = () => {
  return (
    <div className="plan-container">
      <div className="plan-card">
        <div className="recommended">Recomendado</div>
        <div className="plan-title">Pago Anual</div>
        <div className="plan-price">$99</div>
        <div className="plan-description">*Ahorras $129 comparado al plan mensual</div>
        <button className="plan-button">Escoger este</button>
      </div>
    </div>
  )
}

export default PlanCarousel