export class NoveltyProducts {
    constructor(products) {
        this.products = products.slice();
    }

    getNoveltyProducts() {
        return this.products;
    }
}