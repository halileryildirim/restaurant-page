function menuLoad() {
    //create menu for foods and drinks to append
    const menu = document.createElement('div');
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "MENU"
    menu.appendChild(menuHeader);
    menu.classList = "menu";

    //create menu foods and append to menu
    const menuFoods = document.createElement('div');
    const foodHeader = document.createElement('h2');
    foodHeader.textContent = "FOODS";
    menuFoods.classList = "menu-foods";
    menuFoods.appendChild(foodHeader);
    menu.appendChild(menuFoods);

    //create foods and append to menu foods
    const foodList = document.createElement('ul');
    const foodListArray = [["Pizza", " 1$"],["Hamburger", " 1$"], ["Kebab", " 1$"], ["Soup", " 1$"], ["Special Soup", " 2$"]];

    //Append the foods into foodlist as li items
    for(let food in foodListArray) {
        let foodie = document.createElement('li');
        foodie.textContent =`${foodListArray[food[0]]}`;
        foodList.appendChild(foodie);
    }
    menuFoods.appendChild(foodList);

    //create menu drinks and append to menu
    const menuDrinks = document.createElement('div');
    const drinkHeader = document.createElement('h2');
    drinkHeader.textContent = "DRINKS";
    menuDrinks.classList = "menu-drinks";
    menuDrinks.appendChild(drinkHeader)
    menu.appendChild(menuDrinks);

    //create drinks and append to menu drinks
    const drinkList = document.createElement('ul');
    const drinkListArray = [["Water", " 1$"],["Coffee", " 1$"], ["Soda", " 1$"], ["Tea", " 1$"], ["Beypazarı Mineral Water", " 2$"]];

    //Append the drinks into drinklist as li items
    for(let drink in drinkListArray) {
        let drinkie = document.createElement('li');
        drinkie.textContent =`${drinkListArray[drink[0]]}`;
        drinkList.appendChild(drinkie);
    }
    menuDrinks.appendChild(drinkList);

    return menu;
}


export default menuLoad;

/*
class menuItem {
    //create the menu item for menu
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    // return the values as string
    getString() {
        return `${this.name} ${this.desc} ${this.price}`;
    }
};
*/
























/*
class menuItem {
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    getString() {
        return `${this.name} ${this.desc} ${this.price}`;
    }
};

export default function menuLoad() {
    const menu = document.createElement('div');

    const menuFoods = document.createElement('div');
    const foodsHeader = document.createElement('h2');
    foodsHeader.innerText = "GAMER FOODS"
    menuFoods.append(foodsHeader);

    let foods = document.createElement('div');
    let food = new menuItem("Kebab", "Turks love it", "30$"); 
    foods.append(food.getString());
    menuFoods.append(foods);
    
    menu.append(menuFoods);
    return menu;
};
*/
