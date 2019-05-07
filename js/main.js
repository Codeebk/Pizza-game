/*----- constants -----*/
    //pizza

//var toppings = document.getElementById('column-left');    
   

const toppings = {
     a: {
         imgUrl: 'images/cheese-pizza.png'
     },
     b: {
         imgUrl: 'images/cheese-pizza.png'
     },
     c: {
         imgUrl: 'images/cheese-pizza.png'
     },
     d: {
         imgUrl: 'images/cheese-pizza.png'
     },
     e: {
         imgUrl: 'images/cheese-pizza.png'
     },
     f: {
         imgUrl: 'images/cheese-pizza.png'
     },

 };

/*----- app's state (variables) -----*/
var pizza = [];

/*----- cached element references -----*/
// const a = document.getElementsByClassName(a);
const a = document.querySelector("div .a");
console.log(a);
const b = document.querySelector('b');
const c = document.querySelector('c');

//each little topping (img/button) correlates to its full size .png overlay


/*----- event listeners -----*/

//when img of topping is clicked then - overlay that topping on pizza

//document.querySelector('toppings').addEventListener('click', addTopping);

document.getElementsByClassName('toppings').addEventListener('click', function() {
     alert('Button clicked');
  });


/*----- functions -----*/
// display pizza with no overlays at start
initialize();

function initialize() {
    //the toppings!!!
    toppings 
    //the empty var pizza
};





//if a topping button is pressed update with overlay on pizza
function addTopping() {
    //add topping clicked to pizza array
};

// function render() {
//     column-center.style.backgroundImage = `url(${rps[results.p].imgUrl})`;
// }
