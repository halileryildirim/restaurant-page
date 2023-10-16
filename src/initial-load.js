import buttonLoad from "./button-load";
import pageLoad from "./page-load";

function initialLoad() {
    const content = document.querySelector('#content');
    content.append(buttonLoad());
    content.append(pageLoad());
}

export default initialLoad;