import surveyProducts from '../Common/products-data.js';

corresponds to event listener below

const submitButton = document.getElementById('submit-button');
let selection = 0;
const resultsArray = [];
const resultsArrayStringified = JSON.stringify(resultsArray);
localStorage.setItem('RESULTS', resultArrayStringified);


attempt at writing an event listener that sends you to results page after 25 clicks

chooseProduct(surveyProducts);
submitButton.addEventListener('click', () =>{
    const userSelection = document.querySelector('input:checked');
    incrementSelection(userSelection.value);
    chooseProduct(surveyProducts);
    selection++;

    if (questions > 25) {
        location.replace('../Results/results-page.html');
    }
});

