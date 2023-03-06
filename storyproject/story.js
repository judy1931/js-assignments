let name1 = prompt("Enter the first character's name: ");
let name2 = prompt("Enter the second character's name: ");
let phrase = prompt("Enter a catchphrase: ");
let number1 = parseInt(prompt("Enter a number: "));
let number2 = parseInt(prompt("Enter another number: "));

document.write(`
  <p>Once upon a time, there were two friends named ${name1} and ${name2}.</p>
  <p>"${phrase}!", ${name1} would always say.</p>
  <p>They loved going on adventures and discovering new things. One day, they found a treasure chest containing ${number1} gold coins and ${number2} diamonds.</p>
  <p>They became the richest people in the kingdom and lived happily ever after.</p>
`);
