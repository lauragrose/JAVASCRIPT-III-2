// PRIMO ESERCIZIO

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   comparison(other) {
//     if ((this.age) > (other.age)) {
//       return `${this.name} is older then ${other.name}`;
//     } else if ((this.age) < (other.age)) {
//       return `${this.name} is younger then ${other.name}`;
//     } else {
//       return`${this.name} is the same age as ${other.name}`;
//     }
//   }
// }

// var person1 = new Person('Cosimo', 21);
// var person2 = new Person('Laura', 21);
// var person3 = new Person('Christian', 26);

// console.log(person3.comparison(person1));
// console.log(person3.comparison(person2));
// console.log(person1.comparison(person2));

// SECONDO ESERCIZIO

class Pagination {
  constructor(_items, _pageSize) {
    this.items = _items;
    this.pageSize = _pageSize;
  }
}

var firstRow = document.getElementById('first-row');
var secondRow = document.getElementById('second-row');

let currentPage = 0;

const items = [
  { id: 1, nome: 'Christian', cognome: 'Mastropietro', classe: 'A' },
  { id: 2, nome: 'Cosimo', cognome: 'Gargiullo', classe: 'A' },
  { id: 3, nome: 'Laura', cognome: 'Gaudencio', classe: 'B' },
  { id: 4, nome: 'Riccardo', cognome: 'Sennati', classe: 'B' },
  { id: 5, nome: 'Francesca', cognome: 'Pozzi', classe: 'C' },
  { id: 6, nome: 'Carmela', cognome: 'Mollo', classe: 'C' },
  { id: 7, nome: 'Elvira', cognome: 'Noe', classe: 'D' },
  { id: 8, nome: 'Francesco', cognome: 'Musacchio', classe: 'D' }
]

loading = () => {
  firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
  <td>${items[currentPage].nome}</td>
  <td>${items[currentPage].cognome}</td>
  <td>${items[currentPage].classe}</td>`
  secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
  <td>${items[currentPage + 1].nome}</td>
  <td>${items[currentPage + 1].cognome}</td>
  <td>${items[currentPage + 1].classe}</td>`
}

first = () => {
  currentPage = 0;
  firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
  <td>${items[currentPage].nome}</td>
  <td>${items[currentPage].cognome}</td>
  <td>${items[currentPage].classe}</td>`
  secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
  <td>${items[currentPage + 1].nome}</td>
  <td>${items[currentPage + 1].cognome}</td>
  <td>${items[currentPage + 1].classe}</td>`
}

prev = () => {
  firstRow.innerHTML = `<th scope="row">${items[currentPage - 2].id}</th>
  <td>${items[currentPage - 2].nome}</td>
  <td>${items[currentPage - 2].cognome}</td>
  <td>${items[currentPage - 2].classe}</td>`
  secondRow.innerHTML = `<th scope="row">${items[currentPage - 1].id}</th>
  <td>${items[currentPage - 1].nome}</td>
  <td>${items[currentPage - 1].cognome}</td>
  <td>${items[currentPage - 1].classe}</td>`
  currentPage = currentPage - 2;
}

next = () => {
  firstRow.innerHTML = `<th scope="row">${items[currentPage + 2].id}</th>
  <td>${items[currentPage + 2].nome}</td>
  <td>${items[currentPage + 2].cognome}</td>
  <td>${items[currentPage + 2].classe}</td>`
  secondRow.innerHTML = `<th scope="row">${items[currentPage + 3].id}</th>
  <td>${items[currentPage + 3].nome}</td>
  <td>${items[currentPage + 3].cognome}</td>
  <td>${items[currentPage + 3].classe}</td>`
  currentPage = currentPage + 2;
}
last = () => {
  currentPage = 6;
  firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
  <td>${items[currentPage].nome}</td>
  <td>${items[currentPage].cognome}</td>
  <td>${items[currentPage].classe}</td>`
  secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
  <td>${items[currentPage + 1].nome}</td>
  <td>${items[currentPage + 1].cognome}</td>
  <td>${items[currentPage + 1].classe}</td>`
}





