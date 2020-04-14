function randomId(productArray) {
    const index = Math.floor(Math.random() * 20);

    const product = productArray[index];
    const productId = product.id;

    return productId;
}

export function randomizeDisplay(productArray) {
    const anyId = [];

    while (anyId.length < 3) {
        const randomProduct = randomId(productArray);

        if (!(anyId.includes(randomProduct))) {
            anyId.push(randomProduct); 
        }
    }

    return anyId;
}

export function findById(array, productId) {
    let productSelected = null;

    array.forEach(product => {
        if (product.id === productId) {
            productSelected = product;
        }
    });

    return productSelected;
}