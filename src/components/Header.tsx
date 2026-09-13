import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          Solare<span>Energia</span>
        </a>

        <nav className={menuOpen ? 'nav active' : 'nav'}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>

          <a href="#beneficios" onClick={() => setMenuOpen(false)}>
            Benefícios
          </a>

          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>

          <a href="#simulador" onClick={() => setMenuOpen(false)}>
            Simulador
          </a>

          <a href="#contato" onClick={() => setMenuOpen(false)}>
            Contato
          </a>

          <a
            href="#contato"
            className="header-button"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}

export default Header