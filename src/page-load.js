import Icon from './icon.jpg';

export default function pageLoad() {
    const homePage = document.createElement("div");

    const title = document.createElement('h1');
    title.innerText = "GAMERS' FUEL STOP"

    const about = document.createElement('div');
    const aboutH = document.createElement('h2');
    const aboutP = document.createElement('p');
    aboutH.innerText= "ABOUT"
    aboutP.innerText = "Gamers' fuel stop is the best place at delivering fastest, least nutritioned, easy to consume between games foods and drinks to your gaming room. TO GAMERS FROM GAMERS(after this game)."
    about.append(aboutH);
    about.append(aboutP);

    const schedule = document.createElement('div');
    const scheduleH = document.createElement("h2");
    const scheduleP = document.createElement("p");
    scheduleH.innerText = "HOURS";
    scheduleP.innerText = "Open 24/7 Because gamers never sleep.";
    schedule.append(scheduleH);
    schedule.append(scheduleP);

    const restaurantImage = new Image();
    restaurantImage.src = Icon;
    restaurantImage.style.width = "700px";
    restaurantImage.style.height= "600px";
    
    homePage.append(title);
    homePage.append(about);
    homePage.append(schedule);
    homePage.append(restaurantImage);

    return homePage;
};