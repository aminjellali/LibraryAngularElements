export class Sale {
    bookName: String;
    sales: number;
    pricePerItem: number;

    constructor(bookName: String, sales: number, pricePerItem: number) {
        this.bookName = bookName;
        this.sales = sales;
        this.pricePerItem = pricePerItem;
    }
}