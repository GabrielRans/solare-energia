import { useState, type FormEvent } from 'react'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitted(true)

    event.currentTarget.reset()
  }

  return (
    <section className="contact" id="contato">
      <div className="container contact-container">

        <div className="contact-content">
          <span className="contact-tag">
            Fale com um especialista
          </span>

          <h2>
            Pronto para começar a economizar?
          </h2>

          <p>
            Preencha o formulário e receba uma avaliação personalizada
            para o seu consumo de energia.
          </p>

          <div className="contact-info">
            <div>
              <span className="contact-icon">
                <FiPhone />
              </span>

              <div>
                <small>Telefone</small>
                <strong>(62) 99999-9999</strong>
              </div>
            </div>

            <div>
              <span className="contact-icon">
                <FiMail />
              </span>

              <div>
                <small>E-mail</small>
                <strong>contato@solareenergia.com.br</strong>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Nome</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              required
              minLength={2}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(62) 99999-9999"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bill">
              Valor médio da conta
            </label>

            <input
              id="bill"
              name="bill"
              type="number"
              min="0"
              placeholder="Ex: 500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Como podemos ajudar?
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Conte um pouco sobre o seu projeto..."
              required
              minLength={10}
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Solicitar orçamento
            <FiSend />
          </button>

          {submitted && (
            <p className="form-success">
              Solicitação enviada com sucesso!
            </p>
          )}
        </form>

      </div>
    </section>
  )
}

export default Contact