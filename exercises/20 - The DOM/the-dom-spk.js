const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.dir(p);
console.log(divs);
console.log(p.classList);

const myP = document.createElement('p');
myP.classList.add('a-class');
myP.textContent = 'This is a paragraph.';
myP.dataset.name = 'Sascha';
console.log(myP);

console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.append(myParagraph, myImage, myParagraph, myImage);
// myDiv.append(myImage);
// myDiv.append(myImage);
// myDiv.append(myImage);

console.log(myDiv);

document.body.appendChild(myDiv);

// oh shoot! we need to add somethint to the top. like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);

const list = document.createElement('ul');
const item1 = document.createElement('li');
item1.textContent = 'One';
const item2 = document.createElement('li');
item2.textContent = 'Two';
const item3 = document.createElement('li');
item3.textContent = 'Three';
const item4 = document.createElement('li');
item4.textContent = 'Four';
const item5 = document.createElement('li');
item5.textContent = 'Five';

// list.append(item1, item2, item3, item4, item5);

list.append(item3);
item3.after(item4);
item3.before(item2);
list.insertAdjacentElement('afterbegin', item1);
list.insertAdjacentElement('beforeend', item5);
console.log(list);

document.body.append(list);
