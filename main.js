"use strict"
var myInput = document.getElementById("myInput")

function renderCoffee(coffee) {
    var html = '<div class="coffee card col-lg-4 col-md-6 col-xsm-12" style="background-color: #ead5c0; border: none">';
    html += '<img src="img/card4light.jpg" style="border: solid 3px #483018; border-radius: 50%; width: 100%" >' + '</>';
    html += '<strong class="text-center" style="font-size: 1.5em">' + coffee.name + '</strong>';
    html += '<p>' + coffee.text + '</p>';

    html += '</div>';
    // console.log(html);
    return html;
}

var inputValue = myInput.value

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length - 0; i++) {

        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

myInput.addEventListener("input", checkNames)

//Search Bar
function checkNames (e) {
    // e.preventDefault();
    var filteredCoffees = [];
    var selectedRoast = myInput.value.toUpperCase();
    coffees.forEach(function (coffee) {
        if(coffee.upperName.startsWith(selectedRoast) && selectedRoast !== ""){
            filteredCoffees.push(coffee);

        }
        tbody.innerHTML = renderCoffees(filteredCoffees)
    })

}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', text: "It will make your city lights light up!", upperName: 'LIGHT CITY' },
    {id: 2, name: 'Half City', roast: 'Light', upperName: 'HALF CITY', text: "The Morning cup of coffee has an exhilaration about it which the cheering influence of the afternoon or evening cup of tea cannot be expected to reproduce." },
    {id: 3, name: 'Cinnamon', roast: 'Light', upperName: 'CINNAMON', text:"I believe humans get a lot done, not because we're smart, but because we have thumbs so we can make coffee." },
    {id: 4, name: 'City', roast: 'Medium', upperName: 'CITY', text: "It is inhumane, in my opinion, to force people who genuinely have a medical need for coffee to wait in line behind people who apparently view it as some kind of recreational activity."},
    {id: 5, name: 'American', roast: 'Medium', upperName: 'AMERICAN', text: "Humanity runs on coffee"},
    {id: 6, name: 'Breakfast', roast: 'Medium', upperName: 'BREAKFAST', text: "Everyone should believe in something. I believe I will have another coffee."},
    {id: 7, name: 'High', roast: 'Dark', upperName: 'HIGH', text: "Coffee first. Schemes later"},
    {id: 8, name: 'Continental', roast: 'Dark', upperName: 'CONTINENTAL', text: "The most dangerous drinking game is seeing how long I can go without coffee."},
    {id: 9, name: 'New Orleans', roast: 'Dark', upperName: 'NEW ORLEANS', text: "It's amazing how the world begins to change through the eys of a cup of coffee."},
    {id: 10, name: 'European', roast: 'Dark', upperName: 'EUROPEAN', text: "I want someone to look at me the way I look at coffee."},
    {id: 11, name: 'Espresso', roast: 'Dark', upperName: 'ESPRESSO',text:"when life gives you lemons, trade them for coffee." },
    {id: 12, name: 'Viennese', roast: 'Dark', upperName: 'VIENNESE', text: "Coffee is a hug in a mug"},
    {id: 13, name: 'Italian', roast: 'Dark', upperName: 'ITALIAN', text: "Decaf coffee only works if you throw it at people"},
    {id: 14, name: 'French', roast: 'Dark', upperName: 'FRENCH', text: "If I were a wizard, I'm pretty sure my Patronus would be coffee."},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


const selectElement = document.querySelector('.roast-level');

// selectElement.addEventListener('change', (event) => {
//     const result = document.querySelector('.light1');
//     result.textContent = `You like ${event.target.value}`;
// });




//Search Dropdown begins

