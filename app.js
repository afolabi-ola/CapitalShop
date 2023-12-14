const bars = document.querySelector('#bars')
const capitalSelect = document.querySelector('.capitalselect')
const times = document.querySelector('#times')

bars.addEventListener('click', () => {
    bars.classList.toggle('active')
    times.classList.toggle('active')
    capitalSelect.classList.toggle('active')
})

times.addEventListener('click', () => {
    bars.classList.toggle('active')
    times.classList.toggle('active')
    capitalSelect.classList.toggle('active')
})