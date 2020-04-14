import surveyProducts from '../Common/products-data.js';


const nextButton = document.getElementById('next-button');
let selection = 0;
const resultsArray = [];
const resultsArrayStringified = JSON.stringify(resultsArray);
localStorage.setItem('RESULTS', resultArrayStringified);


chooseProduct(surveyProducts);
nextButton.addEventListener('click', () =>{
    const userSelection = document.querySelector('input:checked');
    incrementSelection(userSelection.value);
    chooseProduct(surveyProducts);
    selection++;

    if (questions > 25) {
        location.replace('../Results/results-page.html');
    }
});

