var getInput = document.getElementsByTagName('input');
var getOutput = document.getElementsByTagName('output');

console.log(getInput[0].value);
console.log(getOutput[0].value);

function displayOutput() {
    document.getElementById('display').innerHTML = getInput;
};

function updateValue() {
    var x = getOutput.value;
    console.log(x);
};

displayOutput();
updateValue();