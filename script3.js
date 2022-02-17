var getInput = document.getElementById('the-input');

const listings = [];


//latest - get to work
function validateForm() {
    let x = getInput.value;
    if (x == '') {
        alert('Empty Field');
    };
    return;
};
//this ^

function displayOutput() {
    var addToArray = listings.push(getInput.value);
    
    getInput.value = '';

    console.log('Console Output: ')
    forLoop();

    return;
};

function forLoop() {
    let text = '';
    for (let i = 0; i < listings.length; i++) {
        text += listings[i] + '</br>';
        console.log(listings[i]);
    };

    document.getElementById('display').innerHTML = text;

};