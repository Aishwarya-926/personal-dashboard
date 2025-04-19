function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => li.classList.toggle("done");
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

const monthYear = document.getElementById("month-year");
const calendarDates = document.getElementById("calendar-dates");
const calendarDays = document.getElementById("calendar-days");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Show month and year
  monthYear.textContent = `${date.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  // Show day names
  calendarDays.innerHTML = days.map(day => `<div>${day}</div>`).join("");

  // Show dates
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  let html = "";
  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  for (let d = 1; d <= lastDate; d++) {
    html += `<div>${d}</div>`;
  }

  calendarDates.innerHTML = html;
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

renderCalendar();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.notification.unread').forEach(note => {
      note.addEventListener('click', () => {
        note.classList.remove('unread');
        note.classList.add('read');
      });
    });
  });
  
// Add task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    // Create new task item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add click event to mark task as completed
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Add the new task to the list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
}
