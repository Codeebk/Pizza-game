/*----- constants -----*/
    //pizza

//var toppings = document.getElementById('column-left');    
   


var pizza = {
     a : {imgUrl: 'https://i.imgur.com/sUyfwwK.png'},
     b : {imgUrl: 'https://i.imgur.com/BURZ1IT.png', el: document.querySelector('.b button')},
     c : {imgUrl: 'images/pepperoni.png', el: document.querySelector('.c button')},
     d : {imgUrl: 'images/pepperoni.png', el: document.querySelector('.d button')},
     e : {imgUrl: 'images/pepperoni.png', el: document.querySelector('.e button')},
     f : {imgUrl: 'images/pepperoni.png', el: document.querySelector('.f button')},
 };


/*----- app's state (variables) -----*/
// var newPizza = [];

/*----- cached element references -----*/

//const aEl = document.querySelector('.a button');
// const bEl = document.querySelector('.b button');
// const cEl = document.querySelector('.c button');
// const dEl = document.querySelector('.d button');
// const eEl = document.querySelector('.e button');
// const fEl = document.querySelector('.f button');

// const aOnPizza = document.querySelector('#pizza-image');

// console.log(aEl, bEl, cEl, dEl, eEl, fEl);

//each little topping (img/button) correlates to its full size .png overlay


/*----- event listeners -----*/

//when img of topping is clicked then - overlay that topping on pizza

//document.querySelector('toppings').addEventListener('click', addTopping);

// document.querySelector('.a')
// aEl.addEventListener('click', addTopping);
// document.querySelector('.bake').addEventListener('click', bakePizza);


/*----- functions -----*/
// display pizza with no overlays at start
// initialize();

// function initialize() {
 
//     //the empty var pizza
// };


//when a topping button is pressed update with overlay on pizza
function addToppingA() {
    //add topping clicked to pizza array
    //
document.getElementById('imga').src = pizza.a.imgUrl;
};

function addToppingB() {
    document.getElementById('imgb').src = pizza.b.imgUrl;
}


// function render() {
//     .style.backgroundImage = `url(${toppings[a].imgUrl})`;     
// }

function bakePizza() {
    alert('Bake')
    //if var pizza contains < 2 items
        //alert "Sorry, you didn't put enough toppings on your pizza and it burned- no pizza for you."
    //else if var pizza contains 'non food items'
        //alert "That doesn't go on a pizza! You were poisoned and died."
    // else
        //alert "Congrats! you made an edible pizza!"
};
