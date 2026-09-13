import { useState } from 'react'
import { FiZap, FiTrendingDown } from 'react-icons/fi'

function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(500)

  const monthlySavings = monthlyBill * 0.9
  const yearlySavings = monthlySavings * 12
  const fiveYearSavings = yearlySavings * 5

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <section className="calculator-section" id="simulador">
      <div className="container calculator-container">

        <div className="calculator-content">

          <span className="calculator-tag">
            <FiZap />
            Simulador de economia
          </span>

          <h2>
            Descubra quanto você pode economizar
          </h2>

          <p>
            Informe o valor médio da sua conta de energia
            e veja uma estimativa de economia com energia solar.
          </p>

          <div className="calculator-input-group">

            <label htmlFor="monthlyBill">
              Valor da conta mensal
            </label>

            <div className="calculator-input">

              <span>R$</span>

              <input
                id="monthlyBill"
                type="number"
                min="0"
                value={monthlyBill}
                onChange={(event) =>
                  setMonthlyBill(Number(event.target.value))
                }
              />

            </div>

            <input
              className="calculator-range"
              type="range"
              min="100"
              max="3000"
              step="50"
              value={monthlyBill}
              onChange={(event) =>
                setMonthlyBill(Number(event.target.value))
              }
            />

          </div>

        </div>

        <div className="calculator-result">

          <div className="calculator-result-header">

            <div className="calculator-result-icon">
              <FiTrendingDown />
            </div>

            <div>
              <strong>Economia estimada</strong>
              <p>Considerando até 90% de redução</p>
            </div>

          </div>

          <div className="calculator-main-result">

            <span>Economia mensal</span>

            <strong>
              {formatCurrency(monthlySavings)}
            </strong>

          </div>

          <div className="calculator-results-grid">

            <div>
              <span>Economia anual</span>

              <strong>
                {formatCurrency(yearlySavings)}
              </strong>
            </div>

            <div>
              <span>Economia em 5 anos</span>

              <strong>
                {formatCurrency(fiveYearSavings)}
              </strong>
            </div>

          </div>

          <small>
            * Simulação ilustrativa. Os valores reais podem variar
            de acordo com o consumo e o projeto instalado.
          </small>

        </div>

      </div>
    </section>
  )
}

export default Calculator