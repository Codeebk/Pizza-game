/*----- constants -----*/
    //pizza

//var toppings = document.getElementById('column-left');    
   


var pizza = {
     a : {imgUrl: 'https://i.imgur.com/sUyfwwK.png'},
     b : {imgUrl: 'https://i.imgur.com/563Wi9B.png', el: document.querySelector('.b button')},
     c : {imgUrl: 'https://i.imgur.com/f470DGB.png', el: document.querySelector('.c button')},
     d : {imgUrl: '', el: document.querySelector('.d button')},
     e : {imgUrl: 'https://i.imgur.com/1DFSnun.png', el: document.querySelector('.e button')},
     f : {imgUrl: 'https://i.imgur.com/LsNwPan.png', el: document.querySelector('.f button')},
 };


/*----- app's state (variables) -----*/
// var newPizza = [];

/*----- cached element references -----*/



//each little topping (img/button) correlates to its full size .png overlay


/*----- event listeners -----*/

//when img of topping is clicked then - overlay that topping on pizza


/*----- functions -----*/


//when a topping button is pressed update with overlay on pizza
function addToppingA() {
    document.getElementById('imga').src = pizza.a.imgUrl;
};

function addToppingB() {
    document.getElementById('imgb').src = pizza.b.imgUrl;
}

function addToppingC() {
    document.getElementById('imgc').src = pizza.c.imgUrl;
}

function addToppingD() {
    document.getElementById('imgd').src = pizza.d.imgUrl;
}

function addToppingE() {
    document.getElementById('imge').src = pizza.e.imgUrl;
}

function addToppingF() {
    document.getElementById('imgf').src = pizza.f.imgUrl;
}



function bakePizza() {
    alert('You baked a pizza!')
    //if var pizza contains < 2 items
        //alert "Sorry, you didn't put enough toppings on your pizza and it burned- no pizza for you."
    //else if var pizza contains 'non food items'
        //alert "That doesn't go on a pizza!"
    // else
        //alert "Congrats! you made an edible pizza!"
};
