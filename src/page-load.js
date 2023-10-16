import Icon from './icon.jpg';

function pageLoad() {
    const homePage = document.createElement("div");

    //create and append header for home page
    const title = document.createElement('h1');
    title.innerText = "Best Restaurant Ever"

    //create and append about for home page
    const about = document.createElement('div');
    const aboutH = document.createElement('h2');
    const aboutP = document.createElement('p');
    aboutH.innerText= "ABOUT"
    aboutP.innerText = "We are the best restaurant because we make the best foods for the cheapest prices."
    about.append(aboutH);
    about.append(aboutP);

    //create and append hours for homepage
    const schedule = document.createElement('div');
    const scheduleH = document.createElement("h2");
    const scheduleP = document.createElement("p");
    scheduleH.innerText = "HOURS";
    scheduleP.innerText = "Open 24/7 (Because all our chefs were gamers back then.(they never sleep))";
    schedule.append(scheduleH);
    schedule.append(scheduleP);

    //add and append the resturant image
    const restaurantImage = new Image();
    restaurantImage.src = Icon;
    restaurantImage.style.width = "700px";
    restaurantImage.style.height= "600px";
    
    //append the divs into main homepage div
    homePage.append(restaurantImage);
    homePage.append(title);
    homePage.append(about);
    homePage.append(schedule);
    

    return homePage;
};

export default pageLoad;