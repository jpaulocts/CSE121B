
let myinformation = {};
myinformation.name = 'Paulo Cauás';
myinformation.photo = 'images/profile.jpeg';
myinformation.favoriteFoods = ['shrimps' , ' avocado' , ' cheese' , ' milk' , ' chocolate' , ' pineapple'];
myinformation.hobbies = ['Reading', 'Playing Soccer', 'Talking', 'Studying', 'Jogging', 'Swimming'];
myinformation.placesLived = [];

let places = [
    {
    place : "New Farm",
    time:"12 years"
    },
    { place : "New Hope",
      time : "2 years"
    }, 

    { place : "Setubal", 
    time : "1 year"
    },

    { place : "Big Field", 
    time : "3 years"
    }];

myinformation.placesLived = places; 

document.querySelector("#name").innerHTML = myinformation.name;
document.querySelector("img").setAttribute("src", myinformation.photo);
document.querySelector("img").setAttribute("alt", myinformation.name);



function listMaker (myinformation, id) { 
  
  const ul = document.createElement('ul');
  ul.setAttribute('id', id );
  
  let array = myinformation.map(function (item) {
  const li = document.createElement('li');
  
  li.innerHTML = item;

  ul.appendChild(li);


  
})

  return ul;
}

let foodFavorite = listMaker(myinformation.favoriteFoods, 'favorite-foods');

const span = document.querySelector('#food');

span.appendChild(foodFavorite);

let hobbies = listMaker(myinformation.hobbies, 'hobbies');

const spanHobbies = document.querySelector('#hobbies');

spanHobbies.appendChild(hobbies);


dl = document.createElement('dl');

dl.setAttribute('id', 'places');


for (let i = 0; i < myinformation.placesLived.length; i++) {
  
  let dtText = myinformation.placesLived[i]
  
  let x = document.createElement('dt');
  
  let txt = document.createTextNode(dtText.place);
  x.appendChild(txt);

  dl.appendChild(x);


  let y = document.createElement('dd');
  let txt2 = document.createTextNode(dtText.time);
  y.appendChild(txt2);

  dl.appendChild(y);

}


let a = document.querySelector('#places-lived');

a.appendChild(dl);

