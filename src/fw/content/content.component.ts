import { Component, OnInit } from '@angular/core';
import { Book } from '../domains/book'
import { BookService } from '../services/book.service'

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  errorMessage: string;
  sortBys = ["title", "author"];
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => this.books = books.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} ), error => this.errorMessage = <any>error);
  }

  onSortByChange(newValue) {
    if (newValue === "title"){
      this.books = this.books.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} );
    }
    else if (newValue === "author"){
      this.books = this.books.sort(function(a,b) {
        var a_authors = a.authors.join(", ");
        var b_authors = b.authors.join(", ");
        return (a_authors > b_authors) ? 1 : ((b_authors > a_authors) ? -1 : 0);
      } );
    }
  }
}
