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
  selectedRealBookSortBy: string;

  constructor(private bookService: BookService) { 
    this.selectedRealBookSortBy = this.sortBys[0];
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => this.books = books.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} ), error => this.errorMessage = <any>error);
  }
}
