const input = document.querySelector('label');
const mainCard = document.querySelector('#card');
const nextCard = document.querySelector('#thankyou ');

input.addEventListener('change', (e) => {
  input.classList.toggle('selected');
});

const options = document.querySelectorAll('.wrapper .rating input');

let selectedOption = '';

options.forEach((opt) => {
  opt.addEventListener('change', (e) => {
    selectedOption = e.target.value;
  });
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  mainCard.classList.add('hidden');
  nextCard.classList.add('show');

  if (selectedOption === 'one') {
    selectedOption = 1;
  } else if (selectedOption === 'two') {
    selectedOption = 2;
  } else if (selectedOption == 'three') {
    selectedOption = 3;
  } else if (selectedOption == 'four') {
    selectedOption = 4;
  } else {
    selectedOption = 5;
  }

  document.querySelector(
    '#result'
  ).innerText = `You selected ${selectedOption} out of 5`;
});
