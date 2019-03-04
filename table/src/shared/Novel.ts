export class Novel {
    id: number;
    name: String;
    authorName: String;
    category: String;
    numberOfPages: number;
    price: number;
    storySummary: String;

    constructor(id: number,
        name: String,
        authorName: String,
        category: String,
        numberOfPages: number,
        price: number,
        storySummary: String) {
        this.id = id;
        this.name = name;
        this.authorName = authorName;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.price = price;
        this.storySummary = storySummary;

    }

}