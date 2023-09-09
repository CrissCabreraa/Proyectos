const btnFilter = document.querySelector('.icono-filtro')

btnFilter.addEventListener('click', () => {
    const conteinerFilter = document.querySelector('.conteiner-filtros')

    conteinerFilter.classList.toggle('active')
})