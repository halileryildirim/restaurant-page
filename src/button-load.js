import pageLoad from "./page-load";
import menuLoad from "./menu-load";

function buttonLoad() {
    const content = document.querySelector('#content');
    //Create buttons tab to append buttons
    const tabs = document.createElement('div');
    tabs.classList = 'buttons-tab';

    //create and append home button
    const homeBtn = document.createElement('button');
    homeBtn.innerText = "HOME";
    tabs.appendChild(homeBtn);

    //create and append menu button
    const menuBtn = document.createElement('button');
    menuBtn.innerText = "MENU";
    tabs.appendChild(menuBtn);

    //create and append contact button
    const cntBtn = document.createElement('button');
    cntBtn.innerText = 'CONTACT';
    tabs.appendChild(cntBtn);

    //Link load pages with buttons
    homeBtn.addEventListener('click', () =>{
        content.replaceChildren(buttonLoad(), pageLoad());
    });

    menuBtn.addEventListener('click', () =>{
        content.replaceChildren(buttonLoad(), menuLoad());
        
    });
    
    return tabs;
}

export default buttonLoad;