var x = document.getElementById('the-input');

const listings = [];

function displayOutput() {
    console.log(x.value);
    document.getElementById('display').innerHTML = x.value;

    var addToArray = listings.push(x.value);
    document.getElementById('display').innerHTML = listings;
    console.log(listings);

    return;
};