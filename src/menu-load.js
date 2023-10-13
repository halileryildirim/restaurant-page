class menuItem {
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    getString() {
        return this.name, this.desc, this.price;
    }
}


export default function menuLoad() {
    const menu = document.createElement('div');

    const menuFoods = document.createElement('div');
    const foodsHeader = document.createElement('h2');
    foodsHeader.innerText = "GAMER FOODS"
    menuFoods.append(foodsHeader);

    let foods = document.createElement('div');
    let food = new food("Kebab", "Turks love it", "30$"); 
    foods.append(food.getString());
    menuFoods.append(foods);
    
    menu.append(menuFoods);
    return menu;

}
