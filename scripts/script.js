//brands images
function setImgBrands(arr, className){
    const brands = arr.map(el => `<span><img src="img/brand/${el}.png" alt='Картинка'/></span>`)
                      .join('');

    document.querySelector(className).innerHTML = brands;
}

//our service
function createdCards(arr, className){
    const cards = arr.map((el, i )=> {
        return `
         <div class="our-service-card">
            <div class="card-title-and-img ${el.id}">
                <p>${el.title}</p>
                <img src=${el.img} alt='Картинка'/>
            </div>
            <div class="our-service-price-and-button">
                <span>${el.price}</span>
                <button  data-modal  class="btn">Записаться</button>
            </div>
         </div>
    `;
    }).join('');
    document.querySelector(className).innerHTML = cards
}

//Tabs

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass ){

    // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent(){
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
    }


    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }

            });
        }
    });
}


//Modal close and open
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}
function closeMod(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
// // Modal
function modal(triggerSelector, modalSelector){

    const modal = document.querySelector(modalSelector);
    const btnModal = document.querySelectorAll(triggerSelector);


    btnModal.forEach(btn => {
        btn.addEventListener('click', () =>  openModal(modalSelector));
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeMod(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeMod(modalSelector);
        }
    });

}

// Burger menu
function burgerMenuBtn(menuBurgerBtn, menuHeaderWrapper){
    menuBurgerBtn.classList.toggle('active')
    menuHeaderWrapper.classList.toggle('active')
    document.body.classList.toggle('lock');
}
function burgerMenuClose(menuBurgerBtn, menuHeaderWrapper){
    menuBurgerBtn.classList.remove('active')
    menuHeaderWrapper.classList.remove('active')
    document.body.classList.remove('lock');
}
//Правильно ли делать такую функцию????
function burgerMenu(btnBurger, menuWrapper, menuBtn){
    const menuBurgerBtn = document.querySelector( btnBurger);
    const menuHeaderWrapper = document.querySelector( menuWrapper)
    const btnMenuActive = document.querySelector(menuBtn)

    menuBurgerBtn.addEventListener('click', () => burgerMenuBtn(menuBurgerBtn, menuHeaderWrapper))

    menuHeaderWrapper.addEventListener('click', (e) => {
        e.target && btnMenuActive && burgerMenuClose(menuBurgerBtn, menuHeaderWrapper)
    });
}


//burger menu
burgerMenu('.header_burger', '.header_menu', 'a.header_link')
//brands img
setImgBrands([
    'honda', 'audi', 'kia', 'bmw',
    'lada', 'chevrolet', 'hyundai', 'ford',
    'skoda', 'citroen', 'lexus', 'opel', 'toyota'
], '.logo-brands-container')
//cards
createdCards( [
    {title: 'Ремонт подвески', img: "./img/service/1.png", price: 'от 15 р.', id: 'first-card'},
    {title: 'Ремонт тормозных систем', img: "./img/service/2.png", price: 'от 15 р.', id: 'second-card'},
    {title: 'Ремонт электроники', img: "./img/service/3.png", price: 'от 20 р.', id: 'third-card'},
    {title: 'Автодиагностика', img: "./img/service/4.png", price: 'Бесплатно', id: 'fourth-card'},
    {title: 'Замена масла', img: "./img/service/5.png", price: 'от 10 р.', id: 'fifth-card'},
    {title: 'Ремонт двигателя', img: "./img/service/6.png", price: 'от 20 р.', id: 'sixth-card'},
], '.our-service')

// //tabs
tabs('.why-we-advantages-btn-list',
    '.why-we-description-and-img',
    '.why-we-advantages',
    'why-we-advantages-btn-list_active' );
// //modal
modal('[data-modal]', '.modal')




