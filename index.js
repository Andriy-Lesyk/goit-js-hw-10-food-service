import menus from './menu.json';
import dishName from './dish.hbs';
console.log(menus)


const menuList = document.querySelector('.js-menu')
console.log(menuList)

const markup =menus.map(dishName).join('')
console.log(markup)
menuList.insertAdjacentHTML('beforeend', markup)

const ingredientList = menuList.querySelectorAll('.tag-list')
console.log(ingredientList)







const changeTheme = document.querySelector('.theme-switch__toggle')
const bodyPr = document.querySelector('body')
console.log(changeTheme)
console.log(bodyPr)

changeTheme.addEventListener('change', onDarkTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
function onDarkTheme (){
    bodyPr.classList.toggle(Theme.DARK)
    if (changeTheme.checked===true){
        localStorage.setItem('theme', Theme.DARK)
    }else{
        localStorage.clear();
    }
}
