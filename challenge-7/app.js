/**
 * Write your challenge solution here
 */

const btn = document.querySelectorAll('.accordion-button')


btn.forEach(button => {
    button.addEventListener('click', () => {
        const parentElement = button.parentElement
        const open = parentElement.classList.contains('active')

        btn.forEach(button => {
            button.parentElement.classList.remove('active')
        })

        if (!open) {
            parentElement.classList.add('active')
        }

    })

})