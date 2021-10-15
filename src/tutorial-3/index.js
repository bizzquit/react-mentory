const inputTask = document.querySelector('#task')
const listTasks = document.querySelector('.list')
const btnAddTask = document.querySelector('.addTask')

let tasks = []

const handleClickRemove = (index) => {
  tasks.splice(index, 1)
  render(tasks)
}

const clearListTasks = () => {
  listTasks.textContent = ''
}

const handleClickAdd = () => {
  inputTask.value ? tasks.push(inputTask.value) : null
  inputTask.value = ''
  render(tasks)
}

const templateLi = (task, index) => {
  const newLi = document.createElement('li')
  const newBtn = document.createElement('button')
  newLi.textContent = task
  newLi.setAttribute('data-index', index)
  listTasks.append(newLi)

  if (tasks.length) {
    newBtn.textContent = ' X '
    newBtn.setAttribute(
      'onclick',
      'handleClickRemove(this.parentElement.dataset.index)'
    )
    newBtn.setAttribute('class', 'removeBtn')
    newLi.append(newBtn)
  }
}

const render = (tasks) => {
  clearListTasks()
  if (tasks.length === 0) {
    task = 'Пока нет задач! добавь'
    templateLi(task, 0)
  }
  tasks.forEach((task, index) => {
    templateLi(task, index)
  })
}

//SetTimeout - чисто для красоты - типа загружаются
window.onload = function () {
  setTimeout(() => {
    render(tasks)
  }, 500)
}
