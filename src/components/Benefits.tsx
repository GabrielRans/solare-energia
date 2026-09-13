import {
  FiDollarSign,
  FiSun,
  FiTrendingUp,
  FiShield,
} from 'react-icons/fi'

const benefits = [
  {
    icon: <FiDollarSign />,
    title: 'Economia na conta',
    description:
      'Reduza significativamente seus gastos mensais com energia elétrica.',
  },
  {
    icon: <FiSun />,
    title: 'Energia sustentável',
    description:
      'Utilize uma fonte de energia limpa, renovável e amiga do meio ambiente.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Valorização do imóvel',
    description:
      'Sistemas de energia solar podem aumentar o valor percebido do seu imóvel.',
  },
  {
    icon: <FiShield />,
    title: 'Mais segurança',
    description:
      'Projetos dimensionados de acordo com as necessidades de cada cliente.',
  },
]

function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="section-heading">
          <span>Por que escolher energia solar?</span>

          <h2>Economia hoje e benefícios por muitos anos</h2>

          <p>
            Uma solução inteligente para reduzir custos e investir em uma fonte
            de energia sustentável.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits