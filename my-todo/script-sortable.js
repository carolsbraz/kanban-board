const dropzones = document.querySelectorAll('.dropzone')

dropzones.forEach(dropzone => {
    new Sortable(dropzone, {
        group: 'shared',
        animation: 150
    });
})

const btnAdd = document.querySelector('.btn-add')
const linkClose = document.querySelector('.link-close')
const input = document.querySelector('.input')
const initial = document.querySelector('.initial')

btnAdd.addEventListener('click', () => {
    input.classList.remove('hidden');
})

linkClose.addEventListener('click', () => {
    input.classList.add('hidden');
})

function criarCard() {
    const item = document.createElement('div')
    item.classList.add('item')
    item.draggable = "True"

    const inputText = document.querySelector('#txt-tarefa');
    var value = document.createTextNode(inputText.value);

    const text = document.createElement('div')
    text.classList.add('text')
    text.appendChild(value)

    const status = document.createElement('div')
    status.classList.add('status', 'red')

    item.appendChild(status)
    item.append(text)
    initial.append(item)
    inputText.value = ''
}