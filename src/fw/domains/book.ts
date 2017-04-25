export class Book {
    id: number;
    title: string;
    authors: Array<string>;
    coverUrl: string;
    downloadUrl: string;

    constructor(id: number, title: string, authors: Array<string>, coverUrl: string, downloadUrl: string){
        this.id = id; // allow id to be passed in for now.
        this.title = title;
        this.authors = authors;
        this.coverUrl = coverUrl;
        this.downloadUrl = downloadUrl;
    }
}