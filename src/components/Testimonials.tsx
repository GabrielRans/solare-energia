import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Mariana Costa',
    type: 'Cliente residencial',
    text: 'O atendimento foi excelente e todo o projeto foi explicado de forma simples. A economia na conta fez muita diferença.',
  },
  {
    name: 'Ricardo Almeida',
    type: 'Empresário',
    text: 'Buscávamos reduzir os custos da empresa e encontramos uma solução muito bem planejada para o nosso consumo.',
  },
  {
    name: 'Carlos Mendes',
    type: 'Produtor rural',
    text: 'Projeto organizado, instalação profissional e ótimo acompanhamento durante todo o processo.',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <span>Quem já escolheu a Solare</span>

          <h2>Energia que gera economia e confiança</h2>

          <p>
            Veja algumas experiências de clientes que escolheram uma solução
            mais econômica e sustentável.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <div className="testimonial-stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.type}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials