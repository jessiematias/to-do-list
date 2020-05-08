const form = document.getElementById('form')
const toDoList = document.getElementById('todo')
const inputField = document.getElementById('input')
const completedLi = document.getElementById('completed')

form.addEventListener('submit', e => {

  userInput(inputField.value)
  e.preventDefault()
  inputField.value = ''
  inputField.focus()

})

function userInput(x) {
  let listContent = `<li>${x}<div class="btn-container"><button id="completedbtn" onclick="complete(this)"><i class="fa fa-check" aria-hidden="true"></i>
  </button><button id="removedbtn" onclick="removeItem(this)"><i class="fa fa-trash" aria-hidden="true"></i>
</button></div></li>`
  toDoList.insertAdjacentHTML("beforeend", listContent)
}

removeItem = (element) => {
  element.parentElement.parentElement.remove()
}

complete = (completedElement) => {
  let item = completedElement.parentElement.parentElement
  completedLi.appendChild(item)

  let btnContainer = item.childNodes[1]
  item.style.textDecoration = "line-through 2px";
  btnContainer.removeChild(btnContainer.childNodes[0]);
}
