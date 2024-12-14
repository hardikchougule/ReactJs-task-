window.onload = () => {
    const form = document.querySelector("#addForm");
    let items = document.getElementById("items");
    form.addEventListener("submit", addItem);
    items.addEventListener("click", handleItemAction);
};

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById("item").value.trim();
    if (!newItem) return;

    let li = document.createElement("li");
 
    li.appendChild(document.createTextNode(newItem));

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    items.appendChild(li);

    document.getElementById("item").value = "";
    submit.disabled = true;
    showSuccessMessage("Item added successfully");
}

function handleItemAction(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentNode;
            li.remove();
            showSuccessMessage("Item deleted successfully");
        }
    } else if (e.target.classList.contains("edit")) {
        let li = e.target.parentNode;
        document.getElementById("item").value = li.firstChild.data;
        document.getElementById("submit").value = "Edit";
        document.getElementById("submit").onclick = function (event) {
            event.preventDefault();
            li.firstChild.data = document.getElementById("item").value;
            document.getElementById("item").value = "";
            document.getElementById("submit").value = "Submit";
            document.getElementById("submit").disabled = true;
            showSuccessMessage("Item edited successfully");
        };
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = !ref.value.trim();
}

function showSuccessMessage(message) {
    let lblSuccess = document.getElementById("lblsuccess");
    lblSuccess.innerHTML = message;
    lblSuccess.style.display = "block";
    setTimeout(() => {
        lblSuccess.style.display = "none";
    }, 3000);
}