'use-script';
document.body.classList.add('w-50', 'm-auto');
const div = document.createElement('div');
div.classList.add('row', 'm-auto', 'text-center', 'w-50');
document.body.appendChild(div);
const label = document.createElement('label');
label.classList.add('mt-3', 'fs-2', 'text-danger');
label.innerHTML = 'Wright something or banana';
div.appendChild(label);
const input = document.createElement('input');
input.classList.add('my-3');
input.style.fontSize = 1.5 + 'rem';
input.type = 'text';
div.appendChild(input);
const button = document.createElement('button');
button.classList.add('btn', 'btn-primary', 'w-50', 'm-auto');
button.innerText = 'Click';
button.setAttribute('onclick', 'checkIfBanana()');
div.appendChild(button);

function checkIfBanana() {
  const convertWord = input.value.toLowerCase();
  convertWord === 'banana' ? alert('papaya') : alert('Try banana');
  input.value = '';
}

const label2 = document.createElement('label');
label2.innerText = 'Wright something';
label2.classList.add('mt-3', 'fs-2', 'text-info');
div.appendChild(label2);

const input2 = document.createElement('input');
input2.classList.add('my-3');
input2.style.fontSize = 1.5 + 'rem';
input2.type = 'text';
div.appendChild(input2);
const h2 = document.createElement('h2');

div.appendChild(h2);

const button2 = document.createElement('button');
button2.classList.add('btn', 'btn-primary', 'w-50', 'm-auto', 'col-12');
button2.innerText = 'Click to replace charts ';
button2.setAttribute('onclick', 'replaceChar()');
div.appendChild(button2);

function countChar(srt) {
  const str = input2.value;
  const counts = {};
  for (const key of str) {
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }

  return counts;
}

function replaceChar() {
  let tempKey;
  let MostOccurredChar = 0;
  let obj = countChar();
  for (let key in obj) {
    if (Number(obj[key]) > MostOccurredChar) {
      MostOccurredChar = obj[key];
      tempKey = key;
    }
  }
  h2.innerHTML = input2.value.replaceAll(tempKey, '😎');
  input2.value = '';
}

const button3 = document.createElement('button');
button3.classList.add('btn', 'btn-dark', 'w-75', 'm-auto', 'my-3', 'col-12');
button3.innerText = 'Click for random msg';
button3.setAttribute('onclick', 'randomGreet()');
div.appendChild(button3);

const messages = [
  'HELLO',
  'GOOD MORNING ',
  'GOOD AFTERNOON',
  'GOOD EVENING',
  'GOOD NIGHT',
];

function randomGreet() {
  const tempMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(tempMessage);
}

const firstDateInput = document.createElement('input');
firstDateInput.id = 'first';
const firstDateLabel = document.createElement('label');
firstDateLabel.htmlFor = 'first';
firstDateLabel.innerHTML = 'First date';
firstDateLabel.classList.add('col-6', 'fs-2');

firstDateInput.classList.add('w-50');
firstDateInput.type = 'date';

const dateDiv = document.querySelector('.date');
div.appendChild(dateDiv);
const secondDateInput = document.createElement('input');
secondDateInput.id = 'second';
const secondDateLabel = document.createElement('label');
secondDateLabel.htmlFor = 'second';
secondDateLabel.innerHTML = 'second date';
secondDateLabel.classList.add('col-6', 'fs-2');
secondDateInput.classList.add('w-50');
secondDateInput.type = 'date';
dateDiv.appendChild(firstDateLabel);
dateDiv.appendChild(firstDateInput);
dateDiv.appendChild(secondDateLabel);
dateDiv.appendChild(secondDateInput);
let h3 = document.createElement('h3');

const button4 = document.createElement('button');
button4.classList.add(
  'btn',
  'btn-secondary',
  'w-50',
  'm-auto',
  'my-3',
  'col-12'
);
button4.innerText = 'Click for calculate date';
button4.setAttribute('onclick', 'calculateDate()');
div.appendChild(button4);
div.appendChild(h3);

function calculateDate() {
  const firstDate = new Date(firstDateInput.value);
  const secondDate = new Date(secondDateInput.value);
  const DifferenceInTime = secondDate.getTime() - firstDate.getTime();
  const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

  h3.innerHTML = `Total number of days between dates: 
  ${firstDate}
  and:
 ${secondDate} is: <br/>
 ${DifferenceInDays} days`;
  firstDateInput.value = new Date();
  secondDateInput.value = new Date();
}
