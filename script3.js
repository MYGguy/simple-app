var getInput = document.getElementById('the-input');

const listings = [];

//check if form is empty
function validateForm() {
    let x = getInput;
    if (x.value == '') {
        alert('Empty Field');
    } else {
        displayOutput();
    };
    return;
};

//display the outputs
function displayOutput() {
    var addToArray = listings.push(getInput.value);
    
    getInput.value = '';

    console.log('Console Output: ')
    forLoop();

    return;
};

//loop through listings
function forLoop() {
    let text = '';
    for (let i = 0; i < listings.length; i++) {
        text += listings[i] + '</br>';
        console.log(listings[i]);
    };

    document.getElementById('display').innerHTML = text;

};