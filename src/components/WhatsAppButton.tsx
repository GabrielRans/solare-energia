import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  const message =
    'Olá! Gostaria de solicitar um orçamento de energia solar.'

  const whatsappUrl =
    `https://wa.me/5562999999999?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton