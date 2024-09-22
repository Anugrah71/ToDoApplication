document.addEventListener("DOMContentLoaded", () => {
  let todo = [];

  function addTodo() {
    const input = document.querySelector(".input");
    if (input.value.trim() !== "") {
      todo.push(input.value.trim());
      input.value = "";
      renderTodo();
    }
  }

  function removeTodo(index) {
    todo.splice(index, 1);
    renderTodo();
  }
 
  function renderTodo() {
    const list = document.querySelector(".ol-tag");
    list.innerHTML = "";

    todo.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("overflow-scroll");
      listItem.textContent = item;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Delete";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.color = "red";
      removeBtn.onclick = function () {
        removeTodo(index);
      };

      listItem.appendChild(removeBtn);
      list.appendChild(listItem);
    });
  }

  document.querySelector(".sub-btn").addEventListener("click", addTodo);
});
