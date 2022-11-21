document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    console.log(event.target)
}