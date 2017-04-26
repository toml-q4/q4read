export class Book {
    title: string;
    authors: Array<string>;
    coverUrl: string;
    downloadUrl: string;

    constructor(title: string, authors: Array<string>, coverUrl: string, downloadUrl: string){
        this.title = title;
        this.authors = authors;
        this.coverUrl = coverUrl;
        this.downloadUrl = downloadUrl;
    }
}