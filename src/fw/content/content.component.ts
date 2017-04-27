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
      this.books = this.books.sort(function(a,b) {return (a.authors.join(", ") > b.authors.join(", ")) ? 1 : ((b.authors.join(", ") > a.authors.join(", ")) ? -1 : 0);} );
    }
  }
}
