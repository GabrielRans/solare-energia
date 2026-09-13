import {
  FiArrowRight,
  FiCheckCircle,
  FiSun,
  FiTrendingDown,
  FiZap,
} from 'react-icons/fi'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="badge">
            <FiSun />
            Energia inteligente para o seu futuro
          </span>

          <h1>
            Transforme o sol em
            <strong> economia todos os meses.</strong>
          </h1>

          <p className="hero-description">
            Projetos de energia solar personalizados para residências,
            empresas e propriedades rurais. Reduza seus custos e invista
            em uma fonte de energia limpa e sustentável.
          </p>

          <div className="hero-buttons">

            <a href="#contato" className="btn-primary">
              Solicitar orçamento
              <FiArrowRight />
            </a>

            <a href="#simulador" className="btn-secondary">
              Simular economia
            </a>

          </div>

          <div className="hero-features">

            <span>
              <FiCheckCircle />
              Projeto personalizado
            </span>

            <span>
              <FiCheckCircle />
              Instalação profissional
            </span>

            <span>
              <FiCheckCircle />
              Atendimento especializado
            </span>

          </div>

        </div>

        <div className="hero-visual">

          <div className="solar-visual">

            <div className="solar-sun">
              <FiSun />
            </div>

            <div className="solar-panel">
              <div className="panel-grid">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span key={index}></span>
                ))}
              </div>
            </div>

            <div className="solar-base"></div>

          </div>

          <div className="floating-card floating-card-savings">
            <span className="floating-icon">
              <FiTrendingDown />
            </span>

            <div>
              <small>Economia estimada</small>
              <strong>até 90%</strong>
            </div>
          </div>

          <div className="floating-card floating-card-energy">
            <span className="floating-icon yellow">
              <FiZap />
            </span>

            <div>
              <small>Energia gerada</small>
              <strong>100% limpa</strong>
            </div>
          </div>

          <div className="hero-stat-card">
            <span>Economia anual estimada</span>

            <strong>R$ 5.400</strong>

            <small>
              Simulação baseada em uma conta média de R$ 500/mês.
            </small>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero