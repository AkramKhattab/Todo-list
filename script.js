// Developed by Akram Khattab
$(document).ready(function() {
  let ulTasks = $('#ulTasks');
  let btnAdd = $('#btnAdd');
  let btnReset = $('#btnReset');
  let btnSort = $('#btnSort');
  let btnCleanup = $('#btnCleanup');
  let inpNewTask = $('#inpNewTask');

  // Function to add new task
  function addItem() {
    let listItem = $('<li>', {
      'class': 'list-group-item',
      text: inpNewTask.val()
    });

    listItem.click(() => {
      listItem.toggleClass('done');
    });

    ulTasks.append(listItem);
    inpNewTask.val('');
    toggleInputButtons();
  }

  // Function to clear completed tasks
  function clearDone() {
    $('#ulTasks .done').remove();
    toggleInputButtons();
  }

  // Function to sort tasks
  function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
  }

  // Function to toggle input buttons
  function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '');
    btnAdd.prop('disabled', inpNewTask.val() == '');
    btnSort.prop('disabled', ulTasks.children().length < 1);
    btnCleanup.prop('disabled', ulTasks.children().length < 1);
  }

  inpNewTask.keypress((e) => {
    if (e.which == 13) addItem();
  });

  inpNewTask.on('input', toggleInputButtons);

  btnAdd.click(addItem);
  btnReset.click(() => {
    inpNewTask.val('');
    toggleInputButtons();
  });
  btnCleanup.click(clearDone);
  btnSort.click(sortTasks);
});
