import './styles/style.css';
import slider1 from './assets/images/slider/food-12.jpg';
import slider2 from './assets/images/slider/olive-oil.jpg';
import slider3 from './assets/images/slider/paprika.jpg';
import slider4 from './assets/images/slider/pepper.jpg';
import tabs1 from './assets/images/tabs/elite.jpg';
import tabs2 from './assets/images/tabs/hamburger.jpg';
import tabs3 from './assets/images/tabs/post.jpg';
import tabs4 from './assets/images/tabs/vegy.jpg';
import icon1 from './assets/icons/facebook.svg';
import icon2 from './assets/icons/Group 5.svg';
import icon3 from './assets/icons/instagram.svg';
import icon4 from './assets/icons/left.svg';
import icon5 from './assets/icons/logo.svg';
import icon6 from './assets/icons/right.svg';
import icon7 from './assets/icons/switch.svg';
import icon8 from './assets/icons/veg.svg';
import { objLink } from './scripts/data.js';




window.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.js-container');



        let items = [
            {
                src: 'assets/images/vegy.jpg',
                subtitle: 'Меню "Фитнес"',
                decr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!"',
                price: '<span>229</span>',
            },
            {
                src: 'assets/images/elite.jpg',
                subtitle: 'Меню "Премиум"',
                decr: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
                price: '<span>550</span>'
            },
            {
                src: 'assets/images/post.jpg',
                subtitle: 'Меню "Постное"',
                decr: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
                price: '<span>430</span>'
            }
        ];

        for(let  i = 0; i < items.length; i++) {
            cardsContainer.innerHTML += `<div class="menu__item">
            <img src="${items[i].src}">
            <h3 class="menu__item-subtitle">${items[i].subtitle}"</h3>
            <div class="menu__item-descr">${items[i].decr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${items[i].price}</span> грн/день</div>
            </div> </div>`;
        }

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


    const tabItem = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParents = document.querySelector('.tabheader__items');

        function hideTabContent() {
            tabContent.forEach(item => {
                item.classList.remove('visible');
                item.classList.add('hide');
            });

            tabItem.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function visibleTabContent(i) {
            tabContent[i].classList.add('visible');
            tabItem[i].classList.add('tabheader__item_active');
        }

        hideTabContent();
        visibleTabContent(0);

        tabParents.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabItem.forEach((item, i) => {
                    if(target == item) {
                        hideTabContent();
                        visibleTabContent(i);
                    }
                });
            }
        });

        const   modalTrigger = document.querySelectorAll('[data-modal]'),
                modal = document.querySelector('.modal'),
                modalCloseBtn = document.querySelector('[data-close]');

        function closeModal() {
            modal.classList.add('hidden');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });
        
        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeModal();
            }
        });
        
});


