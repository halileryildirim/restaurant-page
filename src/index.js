import pageLoad from "./page-load";
import menuLoad from "./menu-load";

const content = document.getElementById('content');

function buttonLoad() {
    const buttons = document.createElement("div");

    const homeBtn = document.createElement("button");
    homeBtn.innerText = "HOME";
    buttons.append(homeBtn);

    homeBtn.addEventListener("click", () => {
        content.replaceChildren();
        content.append(buttonLoad());
        content.append(pageLoad());
    });

    const menuBtn = document.createElement("button");
    menuBtn.innerText = "MENU";
    buttons.append(menuBtn);

    menuBtn.addEventListener("click", () => {
        content.replaceChildren();
        content.append(buttonLoad());
        content.append(menuLoad());
    });


    const contactBtn = document.createElement("button");
    contactBtn.innerText = "CONTACT";
    buttons.append(contactBtn);

    return buttons;
    
}

content.append(buttonLoad());
content.append(pageLoad());

