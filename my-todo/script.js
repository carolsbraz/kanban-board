// cards create

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
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
    initial.append(item)
    inputText.value = ''
}

// drag and drop

const cards = document.querySelectorAll('.card')
const itens = document.querySelectorAll('.item')
const dropzones = document.querySelectorAll('.dropzone')

itens.forEach(item => {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
})

function dragstart() {
    cards.forEach(card => { card.classList.add('drag-on') })
    this.classList.add('is-dragging')
}

function dragend() {
    cards.forEach(card => { card.classList.remove('drag-on') })
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
})

function dragover() {
    const itemDrag = document.querySelector('.is-dragging')
    this.appendChild(itemDrag)
}

function dragleave() {}