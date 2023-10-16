import buttonLoad from "./button-load";
import pageLoad from "./page-load";

function initialLoad() {
    const content = document.querySelector('#content');
    content.appendChild(buttonLoad());
    content.appendChild(pageLoad());
}

export default initialLoad;