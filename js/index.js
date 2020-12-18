// alert('Hello JavaScript');

let message = 'Hello World';
// alert(message);
message = 'Nice to see you';
// alert(message);

let num = 42;
num = num + 1;
// alert(num);

const age = Number(prompt('Enter you age'));
const nextAge = age + 1;
alert(nextAge);

if (age < 19) {
    alert('You are underaged!');
} else {
    alert('You are adult');
}

function add(a, b) {
    const result = a + b;
    return result;
}
