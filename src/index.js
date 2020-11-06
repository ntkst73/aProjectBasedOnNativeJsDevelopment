import './styles/style.css';
import image from './images/img.gif';
import image1 from './images/magnify.png';
import { objLink } from './scripts/data.js';


const linkMenu = document.querySelectorAll('.js-menu-item');
const card = document.querySelectorAll('.card');

let  objKeys = Object.keys(objLink);

linkMenu.forEach(function (item, index) {
    let oneName = objLink[objKeys[index]];
    item.innerText = oneName;
    item.addEventListener('click', toggleClass,);
});
 
function toggleClass() {
    this.classList.toggle("active");
}
card.forEach(function (item, index) {
    item.addEventListener('dblclick', function() {
        item.style.display = "none";
    });
});

let h = document.createElement('h1');
h.className = "title";
h.innerHTML  = 'MediaSoft';

const content = document.getElementById('content');
content.prepend(h);

console.log('Запрос данных');
const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'Phone',
            price: 10000,
        };
    
        resolve(product);
    },2000);  
});

req.then((product) => {
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});


