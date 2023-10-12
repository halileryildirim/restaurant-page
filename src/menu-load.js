export default function menuLoad() {
    const menu = document.createElement('div');

    const menuFoods = document.createElement('div');
    const foodsHeader = document.createElement('h2');
    foodsHeader.innerText = "GAMER FOODS"
    menuFoods.append(foodsHeader);
    let food = document.createElement('div');
    food.innerText = "food 1";
    menuFoods.append(food);
    menu.append(menuFoods);

    return menu;

}