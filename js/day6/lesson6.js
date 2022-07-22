// var fruits, text, flen, i;
// fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// flen = fruits.length;

// var a = '';

// for (i = 0; i < flen; i++) {
//     a +=`
//             <li>${2}</li>
//         `;
//     console.log(a)
// }
// document.querySelector('.list').innerHTML = a

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(
    (value,index) => {
        text += `
            <li>${index +1}</li>
            <li>${value}</li>
            `
    });
// text += "</ul>";

//nếu dài thì tách riêng 1 function
// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }

document.querySelector('.list_forEach').innerHTML = text