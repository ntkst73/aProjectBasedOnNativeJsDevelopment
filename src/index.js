import './styles/style.css';
//стили

import image from './images/img.gif';
import image1 from './images/magnify.png';
//картинки

let linkMenu = document.querySelectorAll('.js-menu-item');


let objLink = {
    name1: 'main',
    name2: 'services',
    name3: 'product',
    name4: 'about',
    name5: 'contact'
};


var  objKeys = Object.keys(objLink);
//берем ключи

linkMenu.forEach(function (item, index) {
    var oneName = objLink[objKeys[index]];
    item.innerText = oneName;
});