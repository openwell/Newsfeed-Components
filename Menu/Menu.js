
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
 menu.classList.toggle("menu--open")
  TweenMax.from('.menu--open', 2, {x: -200})
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button') 
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', ()=>{

  toggleMenu()
})


// TweenMax.from(target, duration, {vars})
// x/y  position of 100 (same as transform: translateX(100px))
// opacity rotation scale ease/others top/bottom or so delay/not needed for 
// timeScale for timeline(6)
// tweenMax needed staggerFrom(target, durationOfAnimation, {vars}, staggerAmount)

 TweenMax.from('body', 5, {opacity: 0})