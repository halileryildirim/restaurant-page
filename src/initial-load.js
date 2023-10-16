import pageLoad from "./page-load";

const content = document.querySelector('#content');

function initialLoad() {
    content.append(pageLoad());
}

export default initialLoad;