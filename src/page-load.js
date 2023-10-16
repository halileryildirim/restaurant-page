import Icon from './icon.jpg';

function pageLoad() {
    const homePage = document.createElement("div");
    homePage.classList = 'home';

    //create and append header for home page
    const title = document.createElement('h1');
    title.classList = 'home-title';
    title.textContent = "Best Restaurant Ever"
    
    //create and append about for home page
    const about = document.createElement('div');
    about.classList = 'home-about';
    const aboutH = document.createElement('h2');
    const aboutP = document.createElement('p');
    aboutH.textContent= "ABOUT";
    aboutP.textContent = "We are the best restaurant because we make the best foods for the cheapest prices.";
    about.appendChild(aboutH);
    about.appendChild(aboutP);

    //create and append hours for homepage
    const schedule = document.createElement('div');
    schedule.classList = 'home-schedule';
    const scheduleH = document.createElement("h2");
    const scheduleP = document.createElement("p");
    scheduleH.textContent = "HOURS";
    scheduleP.textContent = "Open 24/7 Because all our staff were gamers back then.(they never sleep)";
    schedule.appendChild(scheduleH);
    schedule.appendChild(scheduleP);

    //add and append the resturant image
    const restaurantImage = new Image();
    restaurantImage.src = Icon;
    restaurantImage.style.width = "700px";
    restaurantImage.style.height= "600px";
    
    //append the divs into main homepage div
    homePage.appendChild(restaurantImage);
    homePage.appendChild(title);
    homePage.appendChild(about);
    homePage.appendChild(schedule);
    

    return homePage;
};

export default pageLoad;