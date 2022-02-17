var getInput = document.getElementById('the-input');

const listings = [];

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