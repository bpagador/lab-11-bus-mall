import surveyProducts from '../Common/products-data';
import findById from '../Common/utils.js';

export function trackViews(idsArray, surveyPerformance) {
    idsArray.forEach(productId => {
        let chosenProduct = findById(surveyPerformance, productId);

        if (!chosenProduct) {
            const product = findById(surveyProducts, productId);

            const initialState = {
                id: product,
                name: product.name,
                selected: 0,
                views: 1,
            };
            surveyPerformance.push(initialState);
        } else {
            chosenProduct.views++;
        }
    });
}