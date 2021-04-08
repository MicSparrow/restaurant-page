function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Salami",
      "Tomato sauce, Mozarella, Tomato, Salami, Onion"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Fungi",
      "Tomato sauce, Mozarella, Mushrooms, Olives"
    )
  );
  menu.appendChild(
    createMenuItem(
      "4cheese",
      "Tomato sauce, Mozarella, 4 Cheese (to choose)"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Athena",
      "Tomato sauce, Gorgonzola, Eggs, Spinach"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Nuggets",
      "Tomato sauce, Mozarella, Onion, Chicken nuggets, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Michelangelo",
      "Tomato sauce, Mozarella, Tomato, Olives, Ham"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Kebab",
      "White sauce, Mozarella, Chicken, Feta cheese"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Fries",
      "Tomato sauce, Mozarella, French fries, Pepper"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;