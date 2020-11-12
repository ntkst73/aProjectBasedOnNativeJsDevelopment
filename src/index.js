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

window.addEventListener('DOMContentLoaded', () => {
    //имитация запроса с сервера
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

    //табы
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
        // модалка
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
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimer);
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

        const  modalTimer = setTimeout(openModal, 5000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

    //Блок наше меню за день
    class MenuCard {
        constructor(src, alt , title, desc, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAN();
            
        }

        changeToUAN() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div> 
            </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "assets/images/vegy.jpg",
        "vegu",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!"',
        9,
        '.menu .container'
    ).render();

    new MenuCard(
        "assets/images/elite.jpg",
        "premium",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        12,
        '.menu .container'
    ).render();

    new MenuCard(
        "assets/images/post.jpg",
        "postnoe",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container'
    ).render();
});