import { Book } from './book'

export class Ebook extends Book {
    downloadUrl: string;
    constructor(id: number, title: string, authors: Array<string>, imageUrl: string, downloadUrl: string) {
        super(id, title, authors, imageUrl);
        this.downloadUrl = downloadUrl;
    }
}