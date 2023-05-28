let array = ['one', 'two', 'three'];

let new_array = array.map(item =>{ return `<li>${item}</li>`});

document.getElementById("myList").innerHTML = new_array.join();