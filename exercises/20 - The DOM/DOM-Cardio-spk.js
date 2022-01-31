// Make a div
// add a class of wrapper to it
// put it into the body
const div1 = document.createElement('div');
div1.classList.add('wrapper');
div1.textContent = 'I am a div!';
document.body.append(div1);

const div2 = document.createElement('div');
div2.classList.add('wrapper');
const div2innerHtml = `
  I am also a div!
`;
div2.innerHTML = div2innerHtml;
document.body.prepend(div2);

const div3Html = `
  <div class="wrapper">I am a div from createRange!</div>
`;
const div3 = document.createRange().createContextualFragment(div3Html);
document.body.append(div3);

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const listHtml = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;
const list = document.createRange().createContextualFragment(listHtml);

// const list2 = list.cloneNode(true);
// const list3 = document.createElement('ul');
// list3.innerHTML = listHtml;

div1.innerHTML = listHtml;
div1.append(list.cloneNode(true));
div2.append(list.cloneNode(true));
div3.append(list.cloneNode(true));
// div2.insertAdjacentElement('afterbegin', list2);
// document.body.insertBefore(list2, div3);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img1 = document.createElement('img');
img1.src = 'https://picsum.photos/500';
img1.alt = 'Cute Puppy';
img1.width = 250;
img1.height = 250;
img1.classList.add('cute');
div1.append(img1);

const imgHtml = `
  <img class="cute" alt="Cute Puppy" src="https://picsum.photos/500" width="250" height="250">
`;
const img2 = document.createRange().createContextualFragment(imgHtml);
div1.append(img2);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const div4 = `
    <div>
        <p>This is the first paragraph</p>
        <p>This is the second paragraph</p>
    </div>
`;

const list2 = div1.querySelector('ul');
list2.insertAdjacentHTML('beforebegin', div4);

// add a class to the second paragraph called warning
div1.querySelector('div').children[1].classList.add('warning');
// div1.querySelector('div > p:first-child').classList.add('warning');
// div1.querySelector('div > p:last-child').remove();
// remove the first paragraph
div1.querySelector('div').firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  return `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
        <button class="delete">&times; Remove Card</button>
    </div>    
  `;
}
// make a new div with a class of cards
const playerDiv = document.createElement('div');
playerDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHtml = generatePlayerCard('Sascha', 49, 181);
cardsHtml += generatePlayerCard('Lola', 17, 167);
cardsHtml += generatePlayerCard('Uli', 47, 175);
cardsHtml += generatePlayerCard('Benno', 11, 152);

// append those cards to the div
playerDiv.insertAdjacentHTML('afterbegin', cardsHtml);
console.log(playerDiv);

// put the div into the DOM just before the wrapper element
const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentElement('beforebegin', playerDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// const button = document.createElement('button');
// button.textContent = 'Delete this card';

// const cards = playerDiv.querySelectorAll('.playerCard');
// cards.forEach((el) => {
//   el.append(button.cloneNode(true));
// });

const buttons = document.querySelectorAll('.delete');

function deleteCard(evt) {
  const card = evt.currentTarget.closest('.playerCard');
  card.remove();
}

function handleButtonClick(button, index, nodeList) {
  console.dir(button);
  console.dir(index);
  console.dir(nodeList);
  button.addEventListener('click', deleteCard);
}

buttons.forEach(handleButtonClick);

// buttons.forEach((button) => {
//   button.addEventListener('click', deleteCard);
// });

// buttons.forEach((button) => {
//   button.addEventListener('click', (evt) => {
//     evt.currentTarget.parentElement.remove();
//   });
// });

// select all the buttons!
// make out delete function
// loop over them and attach a listener
