import Icon from './icon.jpg';

export default function pageLoad() {
    const homePage = document.createElement("div");

    const title = document.createElement('h1');
    title.innerText = "Best Restaurant Ever"

    const about = document.createElement('div');
    const aboutH = document.createElement('h2');
    const aboutP = document.createElement('p');
    aboutH.innerText= "ABOUT"
    aboutP.innerText = "We are the best restaurant because we make the best foods for the cheapest prices."
    about.append(aboutH);
    about.append(aboutP);

    const schedule = document.createElement('div');
    const scheduleH = document.createElement("h2");
    const scheduleP = document.createElement("p");
    scheduleH.innerText = "HOURS";
    scheduleP.innerText = "Open 24/7 (Because all our chefs were gamers back then.(they never sleep))";
    schedule.append(scheduleH);
    schedule.append(scheduleP);

    const restaurantImage = new Image();
    restaurantImage.src = Icon;
    restaurantImage.style.width = "700px";
    restaurantImage.style.height= "600px";
    
    homePage.append(title);
    homePage.append(restaurantImage);
    homePage.append(about);
    homePage.append(schedule);
    

    return homePage;
};