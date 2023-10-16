import pageLoad from "./page-load";

function initialLoad() {
    const content = document.querySelector('#content');
    content.append(pageLoad());
}

export default initialLoad;