function showEditPane() {
    const editPane = document.querySelector("#edit-sidebar");
    const showButton = document.querySelector("#show-edit-sidebar-button");

    editPane.style.display = "Block";
    showButton.style.display = "None";
}

function hideEditPanel() {
    const editPane = document.querySelector("#edit-sidebar");
    const showButton = document.querySelector("#show-edit-sidebar-button");

    editPane.style.display = "None";
    showButton.style.display = "Block";
}