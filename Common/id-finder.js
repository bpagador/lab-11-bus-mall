export function findById(idArray, productId) {
    let productSelected = null;

    idArray.forEach(product => {
        if (product.id === productId) {
            productSelected = product;
        }
    });

    return productSelected;
}