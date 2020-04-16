import surveyProducts from './describes-products.js';
import findById from '../Common/id-finder';

function populateSurveyPage(productId) {
    const product = findById(surveyProducts, productId);

    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'product';
    input.value = productId;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    const img = document.createElement('img');
    img.src = product.image;

    label.appendChild(h3);
    label.appendChild(input);
    label.appendChild(img);

    return label;
}

export function renderInputs(idArray, surveyProductDiv) {
    idArray.forEach(id => {
        const inputElement = populateSurveyPage(id);
        surveyProductDiv.appendChild(inputElement);
    });
}