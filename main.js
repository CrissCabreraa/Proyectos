const btnFilter = document.querySelector('.icono-filtro')

btnFilter.addEventListener('click', () => {
    const conteinerFilter = document.querySelector('.conteiner-filtro')

    conteinerFilter.classList.toggle('active')
})