function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div>
          <a href="#inicio" className="logo footer-logo">
            Solare<span>Energia</span>
          </a>

          <p>
            Energia limpa, economia e sustentabilidade
            para residências e empresas.
          </p>
        </div>

        <div className="footer-links">
          <strong>Navegação</strong>

          <a href="#inicio">Início</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#servicos">Serviços</a>
          <a href="#simulador">Simulador</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-links">
          <strong>Serviços</strong>

          <a href="#servicos">Residencial</a>
          <a href="#servicos">Empresarial</a>
          <a href="#servicos">Projetos personalizados</a>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} Solare Energia. Todos os direitos reservados.
        </p>

        <p>
          Projeto demonstrativo para portfólio.
        </p>
      </div>
    </footer>
  )
}

export default Footer