var getInput = document.getElementById('the-input');

const listings = [];

const presettings = [];

//check if form is empty
function validateForm() {
    let x = getInput;
    if (x.value == '') {
        alert('Empty Field');
        return;
    } else {
        focusInput();
    };
};

//loop through listings or presets
function forLoop(some) {
    let text = '';
    let presetText = '';
    let consoleText = '';
    
    for (let i = 0; i < some.length; i++) {
        text += some[i] + '</br>';
        presetText += '<button class=presetButtons onclick=presetClick(' + i + ') id=' + 'button' + i + ' value=' + some[i] + '>' + some[i] + '</button> ';

        consoleText = some[i];

        if (some == listings) {
            console.log(consoleText);
            document.getElementById('display').innerHTML = text;
        } else if (some == presettings) {
            console.log(consoleText);
            
            //make each one a button
            document.getElementById('presets').innerHTML = presetText;
        };

    };

    return;
};

//display the outputs
function displayOutput() {
    if (getInput.value !== '') {
        var addToArray = listings.push(getInput.value);
        
        console.log('Console Output: ');
        
        forLoop(listings);

        getInput.value = '';

        focusInput();
    } else {
        return;
    };
    return;
};

//create presets
function createPreset() {
    if (getInput.value !== '') {
        var addToArray = presettings.push(getInput.value);
        
        console.log('Saved Presets: ');

        forLoop(presettings);

        getInput.value = '';

        focusInput();
    };
return;
};

//when clicked on, find its value
function presetClick(presetIndex) {
    var getButtonIndex = document.getElementById('button' + presetIndex);

    //get button index from array prototype
    var getArrayPreset = presettings.prototype;

    //test log
    //console.log(getButtonIndex);

    getInput.value = presettings[presetIndex];

    focusInput();

    return;
};

function focusInput() {
    getInput.focus();

    return;
};
