import { FiHome, FiBriefcase, FiSun } from 'react-icons/fi'

const services = [
  {
    icon: <FiHome />,
    title: 'Energia Solar Residencial',
    description:
      'Projetos personalizados para reduzir os gastos de energia da sua residência.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Energia Solar Empresarial',
    description:
      'Soluções para empresas que buscam economia, eficiência e previsibilidade.',
  },
  {
    icon: <FiSun />,
    title: 'Projetos Personalizados',
    description:
      'Dimensionamento completo de acordo com o consumo e as necessidades do cliente.',
  },
]

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-heading">
          <span>Nossos serviços</span>

          <h2>
            Soluções de energia para diferentes necessidades
          </h2>

          <p>
            Da residência à empresa, desenvolvemos projetos pensados para gerar
            economia e eficiência.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contato">
                Solicitar orçamento →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services