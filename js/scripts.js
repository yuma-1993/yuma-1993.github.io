//Guardamos en estas dos variables los elementos con esos ID
const toggleMenuElement = document.getElementById('toggle-menu'); //Icono hamburguesa
const mainMenuElement = document.getElementById('main-menu'); //Menu

//Cuando se haga click, a ese mainMenuElement se le intercambiará la clase
toggleMenuElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('main-menu--show') //Si tiene la clase se la quitamos y si no se la ponemos;
});