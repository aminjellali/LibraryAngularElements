export class Magazine {
    id: number;
    name: String;
    authorName: String;
    category: String;
    numberOfPages: number;
    price: number;
    nextReleaseDate: Date;

    constructor(id: number,
        name: String,
        authorName: String,
        category: String,
        numberOfPages: number,
        price: number,
        nextReleaseDate: Date) {
        this.id = id;
        this.name = name;
        this.authorName = authorName;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.price = price;
        this.nextReleaseDate = nextReleaseDate;

    }
}
// define magazine class here