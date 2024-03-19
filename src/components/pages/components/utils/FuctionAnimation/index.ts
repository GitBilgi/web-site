export function animateOnScroll() {
  // Função para verificar se o elemento está dentro do contêiner
  function isElementInContainer(
    el: HTMLElement,
    container: HTMLElement
  ): boolean {
    const elRect = el.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    return (
      elRect.top >= containerRect.top &&
      elRect.left >= containerRect.left &&
      elRect.bottom <= containerRect.bottom &&
      elRect.right <= containerRect.right
    )
  }

  // Função para adicionar a classe de animação quando o elemento está dentro do contêiner
  const container = document.querySelector('.container') as HTMLElement
  const elementos = document.querySelectorAll('.elemento')
  elementos.forEach(elemento => {
    if (isElementInContainer(elemento as HTMLElement, container)) {
      ;(elemento as HTMLElement).classList.add(
        'animate__animated',
        'animate__slideInDown'
      )
    }
  })
}
