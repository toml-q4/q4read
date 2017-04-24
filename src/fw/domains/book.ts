export class Book {
    id: number;
    title: string;
    authors: Array<string>;
    imageUrl: string;

    constructor(id: number, title: string, authors: Array<string>, imageUrl: string){
        this.id = id; // allow id to be passed in for now.
        this.title = title;
        this.authors = authors;
        this.imageUrl = imageUrl;
    }
}