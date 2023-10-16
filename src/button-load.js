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
    tabs.append(homeBtn);

    //create and append menu button
    const menuBtn = document.createElement('button');
    menuBtn.innerText = "MENU";
    tabs.append(menuBtn);

    //create and append contact button
    const cntBtn = document.createElement('button');
    cntBtn.innerText = 'CONTACT';
    tabs.append(cntBtn);

    //Link load pages with buttons
    homeBtn.addEventListener('click', () =>{
        content.replaceChildren(pageLoad());
    });

    menuBtn.addEventListener('click', () =>{
        content.replaceChildren(menuLoad());
        
    });
    
    content.appendChild(tabs);
}

export default buttonLoad;