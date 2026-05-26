const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">Delete</button>
    </div>
    `;

  const completeBtn = li.querySelector(".complete-btn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";
};
addBtn.addEventListener("click", addTask);

// Press Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});