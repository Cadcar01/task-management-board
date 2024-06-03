// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const today = dayjs()
const taskButton = $('#taskBtn')
const taskTitle = $('input[name="task-title"]')
const taskDueDate = $('input[name="due-date"]')
const taskDescription = $('input[name="task-description"]')
const taskArray = taskList || [] 

// Todo: create a function to generate a unique task id
function generateTaskId() {
$.each()
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  $.each(taskList, function() {
    const cardEl = $('<div>')
  cardEl.attr('id', 'card')

  const cardTitle = $('<h3>')
  cardTitle.text(taskList.title)

  const cardDescription = $('<p>')


  const cardDueDate = $('<p>')


  const cardBtn = $('<button>')

  cardEl.append(cardTitle)
  cardEl.append(cardDescription)
  cardEl.append(cardDueDate)
  cardEl.append(cardBtn)
  $('#todo-cards').append(cardEl)
  console.log(taskList)
  })
  
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
createTaskCard()
$('#card').draggable()

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  const task = {
    title: taskTitle.val(),
    dueDate: taskDueDate.val(),
    description: taskDescription.val()
  }

  taskArray.push(task)
  localStorage.setItem('tasks', JSON.stringify(taskArray))
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  taskButton.on('click', function () {
    handleAddTask()
    renderTaskList()
    $('input[type="text"]').val('')
  })

  

    $('.card-body').droppable()

    $( function() {
        $( "#dueDate" ).datepicker();
      } );
});
