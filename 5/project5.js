const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create new li element and set its content
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create the span (delete button) and append it to li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the 'x' symbol
        li.appendChild(span);
    }

    // Clear the input field after adding the task
    inputBox.value = "";

    // Save the updated task list to localStorage
    saveData();
}

// Event listener for toggling completed tasks and deleting tasks
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the entire task (li)
        saveData();
    }
}, false);

// Function to save the task list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the task list from localStorage
function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

// Show saved tasks when the page loads
showTask();
