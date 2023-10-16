let menuListArray = ["Margherita", "Pepperoni", "Vegetariana"];
let addedMenuArray = [];

function getMenu() {
    menuListArray.sort();
    let displayMenu = document.getElementById("displayMenu");
    displayMenu.innerHTML = "";

    for (let i = 0; i < menuListArray.length; i++) {
        let pizzaDiv = document.createElement("div");
        pizzaDiv.innerHTML = `<img src="pizza_${i+1}.jpg" alt="${menuListArray[i]}"><p>${menuListArray[i]}</p>`;
        displayMenu.appendChild(pizzaDiv);
    }
}

function addSuggestion() {
    let suggestion = prompt("Digite sua sugestão para a pizza:");
    addedMenuArray.push(suggestion);
    displayAddedMenu();
}

function displayAddedMenu() {
    addedMenuArray.sort();
    let displayAddedMenu = document.getElementById("displayAddedMenu");
    displayAddedMenu.innerHTML = "";

    for (let i = 0; i < addedMenuArray.length; i++) {
        let pizzaDiv = document.createElement("div");
        pizzaDiv.textContent = addedMenuArray[i];
        displayAddedMenu.appendChild(pizzaDiv);
    }
}