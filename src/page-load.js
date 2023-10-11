import Icon from './icon.jpg';

export default function pageLoad() {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerText = 'BYS RESTAURANT'

    const explanation = document.createElement('p');
    explanation.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis deleniti illum quisquam placeat quae dolorem ut sed, fuga eum reprehenderit ratione, voluptatibus esse atque dolore molestias. Minus quas fugiat commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur nisi odit quod molestias soluta nam aspernatur ipsa quo amet, harum repellendus, similique hic ipsam placeat repudiandae cum dolore nobis?'

    
    const restaurantImage = new Image();
    restaurantImage.src = Icon;
    
    
    content.appendChild(header);
    content.appendChild(explanation);
    content.appendChild(restaurantImage);
    

};